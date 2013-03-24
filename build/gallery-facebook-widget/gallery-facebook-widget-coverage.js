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
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].code=["YUI.add('gallery-facebook-widget', function (Y, NAME) {","","Y.FacebookWidget = Y.Base.create(\"gallery-facebook-widget\", Y.Widget, [], {","    ","    fbData: null,","    ","    initializer: function () {","        var me = this;","        var fbDataConfig = {","            fbAppId: this.get('fbAppId'),","            fbChannelFile: this.get('fbChannelFile'),","            onInit: function(e) {","                me._log('data access initialized');","                me.fbData.listSitePosts(me.get('fbSiteId'), function(data) {","                   me._log('site posts', data); ","                   me._set('posts', data.data);","                });","            }","        };","        this.fbData = new Y.FacebookDAO(fbDataConfig);","    },","","    destructor: function () {","","    },","","    bindUI: function () {","        var me = this;","        this.after('postsChange', this.syncUI, this);","        this.get('contentBox').delegate('mouseover', function(e) {","            me.get('contentBox').all('li').removeClass('hover'); ","            e.currentTarget.addClass('hover');","        }, 'li');","        this.get('contentBox').delegate('click', function(e) {","","        }, 'li');","    },","","    syncUI: function () {","        this.get('contentBox').one('.widget-content').setHTML(Y.substitute(this.get('TEMPLATES').POSTS_LIST, {}));","        var postsListNode = this.get('contentBox').one('ul');","        var posts = this.get('posts');","        for (var i = 0; i < posts.length; i++) {","            var postNode = Y.Node.create(Y.substitute(this.get('TEMPLATES').POST, {image: posts[i].fb_data.portrait_image, message: posts[i].fb_data.message  }));","            postNode.setData('post-url', 'url');","            postsListNode.append(postNode);","        }","    },","","    _log: function (message, obj) {","        console.log('[' + this.getClassName() + '] ' + message);","        if (obj) {","            console.log(obj);","        }","    }","}, {","    ATTRS: {","        fbAppId: {","            value: null","        },","        fbChannelFile: {","            value: '/channel.html'","        },","        fbSiteId: {","            value: null","        },","","        posts: {","            readOnly: true","        },","","        TEMPLATES: {","            value: {","                POSTS_LIST: '<ul></ul>',","                POST: '<li><img src=\"{image}\"/><p>{message}</p><div class=\"clear\"></div></li>'","            }","        }","    },","    HTML_PARSER: {","","    }","});","","}, '@VERSION@', {\"requires\": [\"widget\", \"base-build\", \"substitute\", \"gallery-facebook-dao\"], \"skinnable\": true});"];
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].lines = {"1":0,"3":0,"8":0,"9":0,"13":0,"14":0,"15":0,"16":0,"20":0,"28":0,"29":0,"30":0,"31":0,"32":0,"34":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"51":0,"52":0,"53":0};
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].functions = {"(anonymous 2):14":0,"onInit:12":0,"initializer:7":0,"(anonymous 3):30":0,"bindUI:27":0,"syncUI:39":0,"_log:50":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].coveredLines = 25;
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].coveredFunctions = 8;
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 1);
YUI.add('gallery-facebook-widget', function (Y, NAME) {

_yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 3);
Y.FacebookWidget = Y.Base.create("gallery-facebook-widget", Y.Widget, [], {
    
    fbData: null,
    
    initializer: function () {
        _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "initializer", 7);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 8);
var me = this;
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 9);
var fbDataConfig = {
            fbAppId: this.get('fbAppId'),
            fbChannelFile: this.get('fbChannelFile'),
            onInit: function(e) {
                _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "onInit", 12);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 13);
me._log('data access initialized');
                _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 14);
me.fbData.listSitePosts(me.get('fbSiteId'), function(data) {
                   _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "(anonymous 2)", 14);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 15);
me._log('site posts', data); 
                   _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 16);
me._set('posts', data.data);
                });
            }
        };
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 20);
this.fbData = new Y.FacebookDAO(fbDataConfig);
    },

    destructor: function () {

    },

    bindUI: function () {
        _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "bindUI", 27);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 28);
var me = this;
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 29);
this.after('postsChange', this.syncUI, this);
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 30);
this.get('contentBox').delegate('mouseover', function(e) {
            _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "(anonymous 3)", 30);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 31);
me.get('contentBox').all('li').removeClass('hover'); 
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 32);
e.currentTarget.addClass('hover');
        }, 'li');
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 34);
this.get('contentBox').delegate('click', function(e) {

        }, 'li');
    },

    syncUI: function () {
        _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "syncUI", 39);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 40);
this.get('contentBox').one('.widget-content').setHTML(Y.substitute(this.get('TEMPLATES').POSTS_LIST, {}));
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 41);
var postsListNode = this.get('contentBox').one('ul');
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 42);
var posts = this.get('posts');
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 43);
for (var i = 0; i < posts.length; i++) {
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 44);
var postNode = Y.Node.create(Y.substitute(this.get('TEMPLATES').POST, {image: posts[i].fb_data.portrait_image, message: posts[i].fb_data.message  }));
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 45);
postNode.setData('post-url', 'url');
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 46);
postsListNode.append(postNode);
        }
    },

    _log: function (message, obj) {
        _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "_log", 50);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 51);
console.log('[' + this.getClassName() + '] ' + message);
        _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 52);
if (obj) {
            _yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 53);
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

}, '@VERSION@', {"requires": ["widget", "base-build", "substitute", "gallery-facebook-dao"], "skinnable": true});
