Y.FacebookWidget = Y.Base.create("gallery-facebook-widget", Y.Widget, [], {

    initializer: function () {
        this._loadFBSdk();
    },

    destructor: function () {

    },

    _loadFBSdk: function () {
        var me = this;
        window.fbAsyncInit = function () {
            FB.init({
                appId: me.get('fbAppId'),
                channelUrl: me.get('fbChannelFile'),
                status: true,
                cookie: true,
                xfbml: true
            });
            FB.getLoginStatus(function (response) {
                me._log('checking login status : ', response);
                if (response.status === 'not_authorized' || response.status === 'not_logged_in') {
                    me.fbLogin();
                    return;
                }
                me.syncData();
            });

        };

        (function (d) {
            var js, id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement('script');
            js.id = id;
            js.async = true;
            js.src = "http://connect.facebook.net/en_US/all.js";
            ref.parentNode.insertBefore(js, ref);
        }(document, /*debug*/ false));
    },

    bindUI: function () {
        var me = this;
        this.after('postsChange', this.syncUI, this);
        this.get('contentBox').delegate('mouseover', function(e) {
            me.get('contentBox').all('li').removeClass('hover'); 
            e.currentTarget.addClass('hover');
        }, 'li');
        this.get('contentBox').delegate('click', function(e) {

        }, 'li');
    },

    syncUI: function () {
        var me = this;
        var posts = this.get('posts').data;
        this._set('postsCount', posts.length);
        for (var i = 0; i < posts.length; i++) {
            var messageFrom = posts[i].from.id;
            (function (messageFrom, index) {
	            FB.api(messageFrom + '/picture', function (response) {
	                me.syncPosts(posts, response, index);
	            });    
            })(messageFrom, i);
        }
    },

    syncPosts: function (posts, image, index) {
        var me = this;
        var post = posts[index];
        this._set('postsCount', this.get('postsCount') - 1);
        var message = (post.message) ? post.message : ((post.story) ? post.story : null);
		posts[index].custom_message = message;
		posts[index].custom_user_message_image = image.data.url;
        if (this.get('postsCount') == 0) {
            me.get('contentBox').one('.widget-content').setHTML(Y.substitute(me.get('TEMPLATES').POSTS_LIST, {}));
        	var postsListNode = me.get('contentBox').one('ul');
            for (var i = 0; i < posts.length; i++) {
                var postNode = Y.Node.create(Y.substitute(me.get('TEMPLATES').POST, {image: posts[i].custom_user_message_image, message: posts[i].custom_message  }));
                postNode.setData('post-url', 'url');
                postsListNode.append(postNode);
        	}
        }
    },

    syncData: function () {
        this.fbGetSitePosts();
    },

    fbGetSitePosts: function () {
        var me = this;
        FB.api(this.get('fbSiteId') + '/feed', function (response) {
            me._log('Site feed result:', response);
            me._set('posts', response);
        });
    },

    fbLogin: function () {
        FB.login(function (response) {
            this.syncData();
        });
    },


    _log: function (message, obj) {
        console.info('[' + this.getClassName() + '] ' + message);
        if (obj) {
            console.info(obj);
        }
    }
}, {
    ATTRS: {
        fbAppId: {
            value: null
        },
        fbChannelFile: {
            value: '/channel.html'
        },
        fbSiteId: {
            value: null
        },

        posts: {
            readOnly: true
        },
		
		postsCount: {
			value: 0,
			readOnly: true
		},
		
        TEMPLATES: {
            value: {
                POSTS_LIST: '<ul></ul>',
                POST: '<li><img src="{image}"/><p>{message}</p><div class="clear"></div></li>'
            }
        }
    },
    HTML_PARSER: {

    }
});