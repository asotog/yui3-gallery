Y.FacebookWidget = Y.Base.create("gallery-facebook-widget", Y.Widget, [], {
    
    fbData: null,
    
    initializer: function () {
        var me = this;
        var fbDataConfig = {
            fbAppId: this.get('fbAppId'),
            fbChannelFile: this.get('fbChannelFile'),
            onInit: function(e) {
                me._log('data access initialized');
                me.fbData.listSitePosts(me.get('fbSiteId'), function(data) {
                   me._log('site posts', data); 
                   me._set('posts', data.data);
                });
            }
        };
        this.fbData = new Y.FacebookDAO(fbDataConfig);
    },

    destructor: function () {

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
        this.get('contentBox').one('.widget-content').setHTML(Y.substitute(this.get('TEMPLATES').POSTS_LIST, {}));
        var postsListNode = this.get('contentBox').one('ul');
        var posts = this.get('posts');
        for (var i = 0; i < posts.length; i++) {
            var postNode = Y.Node.create(Y.substitute(this.get('TEMPLATES').POST, {image: posts[i].fb_data.portrait_image, message: posts[i].fb_data.message  }));
            postNode.setData('post-url', 'url');
            postsListNode.append(postNode);
        }
    },

    _log: function (message, obj) {
        console.log('[' + this.getClassName() + '] ' + message);
        if (obj) {
            console.log(obj);
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