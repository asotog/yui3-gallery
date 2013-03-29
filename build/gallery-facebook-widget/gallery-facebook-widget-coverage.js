if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-facebook-widget/gallery-facebook-widget.js",
    code: []
};
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].code=["YUI.add('gallery-facebook-widget', function (Y, NAME) {","","/**","* This is the description for my class.","*","* @class FacebookWidget","* @module gallery-facebook-widget","* @constructor","*/","Y.FacebookWidget = Y.Base.create(\"gallery-facebook-widget\", Y.Widget, [], {","    ","    fbData: null,","    ","    initializer: function () {","        var me = this;","        var fbDataConfig = {","            fbAppId: this.get('fbAppId'),","            fbChannelFile: this.get('fbChannelFile'),","            onInit: function(e) {","                me._log('data access initialized');","                me.fbData.listSitePosts(me.get('fbSiteId'), function(data) {","                   me._log('site posts', data); ","                   me._set('posts', data.data);","                });","            }","        };","        this.fbData = new Y.FacebookDAO(fbDataConfig);","    },","","    destructor: function () {","","    },","","    bindUI: function () {","        var me = this;","        this.after('postsChange', this.syncUI, this);","        this.get('contentBox').delegate('mouseover', function(e) {","            me.get('contentBox').all('li').removeClass('hover'); ","            e.currentTarget.addClass('hover');","        }, 'li');","        this.get('contentBox').delegate('click', function(e) {","            window.open(e.currentTarget.getData('post-url'), '_blank').focus();","        }, 'li');","    },","","    syncUI: function () {","        this.get('contentBox').one('.widget-content').setHTML(Y.substitute(this.get('TEMPLATES').POSTS_LIST, {}));","        var postsListNode = this.get('contentBox').one('ul');","        var posts = this.get('posts');","        for (var i = 0; i < posts.length; i++) {","            var postNode = Y.Node.create(Y.substitute(this.get('TEMPLATES').POST, {image: posts[i].fb_data.portrait_image, message: posts[i].fb_data.message  }));","            postNode.setData('post-url', posts[i].actions[0].link);","            postsListNode.append(postNode);","        }","    },","","    _log: function (message, obj) {","        console.log('[' + this.getClassName() + '] ' + message);","        if (obj) {","            console.log(obj);","        }","    }","}, {","    ATTRS: {","        fbAppId: {","            value: null","        },","        fbChannelFile: {","            value: '/channel.html'","        },","        fbSiteId: {","            value: null","        },","","        posts: {","			value: [],","            readOnly: true","        },","","        TEMPLATES: {","            value: {","                POSTS_LIST: '<ul></ul>',","                POST: '<li><img src=\"{image}\"/><p>{message}</p><div class=\"clear\"></div></li>'","            }","        }","    },","    HTML_PARSER: {","","    }","});","","}, '@VERSION@', {\"requires\": [\"widget\", \"base-build\", \"substitute\", \"gallery-facebook-dao\"], \"skinnable\": true});"];
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].lines = {"1":0,"10":0,"15":0,"16":0,"20":0,"21":0,"22":0,"23":0,"27":0,"35":0,"36":0,"37":0,"38":0,"39":0,"41":0,"42":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"58":0,"59":0,"60":0};
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].functions = {"(anonymous 2):21":0,"onInit:19":0,"initializer:14":0,"(anonymous 3):37":0,"(anonymous 4):41":0,"bindUI:34":0,"syncUI:46":0,"_log:57":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].coveredLines = 26;
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].coveredFunctions = 9;
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 1);
YUI.add('gallery-facebook-widget', function (Y, NAME) {

/**
* This is the description for my class.
*
* @class FacebookWidget
* @module gallery-facebook-widget
* @constructor
*/
_yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 10);
Y.FacebookWidget = Y.Base.create("gallery-facebook-widget", Y.Widget, [], {
    
    fbData: null,
    
    initializer: function () {
        _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "initializer", 14);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 15);
var me = this;
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 16);
var fbDataConfig = {
            fbAppId: this.get('fbAppId'),
            fbChannelFile: this.get('fbChannelFile'),
            onInit: function(e) {
                _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "onInit", 19);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 20);
me._log('data access initialized');
                _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 21);
me.fbData.listSitePosts(me.get('fbSiteId'), function(data) {
                   _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "(anonymous 2)", 21);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 22);
me._log('site posts', data); 
                   _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 23);
me._set('posts', data.data);
                });
            }
        };
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 27);
this.fbData = new Y.FacebookDAO(fbDataConfig);
    },

    destructor: function () {

    },

    bindUI: function () {
        _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "bindUI", 34);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 35);
var me = this;
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 36);
this.after('postsChange', this.syncUI, this);
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 37);
this.get('contentBox').delegate('mouseover', function(e) {
            _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "(anonymous 3)", 37);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 38);
me.get('contentBox').all('li').removeClass('hover'); 
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 39);
e.currentTarget.addClass('hover');
        }, 'li');
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 41);
this.get('contentBox').delegate('click', function(e) {
            _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "(anonymous 4)", 41);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 42);
window.open(e.currentTarget.getData('post-url'), '_blank').focus();
        }, 'li');
    },

    syncUI: function () {
        _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "syncUI", 46);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 47);
this.get('contentBox').one('.widget-content').setHTML(Y.substitute(this.get('TEMPLATES').POSTS_LIST, {}));
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 48);
var postsListNode = this.get('contentBox').one('ul');
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 49);
var posts = this.get('posts');
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 50);
for (var i = 0; i < posts.length; i++) {
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 51);
var postNode = Y.Node.create(Y.substitute(this.get('TEMPLATES').POST, {image: posts[i].fb_data.portrait_image, message: posts[i].fb_data.message  }));
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 52);
postNode.setData('post-url', posts[i].actions[0].link);
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 53);
postsListNode.append(postNode);
        }
    },

    _log: function (message, obj) {
        _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "_log", 57);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 58);
console.log('[' + this.getClassName() + '] ' + message);
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 59);
if (obj) {
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 60);
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
			value: [],
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

}, '@VERSION@', {"requires": ["widget", "base-build", "substitute", "gallery-facebook-dao"], "skinnable": true});
