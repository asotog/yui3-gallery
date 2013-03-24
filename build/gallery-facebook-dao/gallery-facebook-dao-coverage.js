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
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/gallery-facebook-dao/gallery-facebook-dao.js",
    code: []
};
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].code=["YUI.add('gallery-facebook-dao', function (Y, NAME) {","","function FacebookDAO(arguments) {","    this.configuration = arguments;","    this._initDataAccess();","    this._loadFBComponents();","}","","FacebookDAO.prototype = {","    ","    configuration: null,","","    listSitePosts: function(siteId, callback) {","        FB.api(siteId + '/feed', function (response) {","            var posts = response;","            var postsCount = posts.data.length;","            for (var i = 0; i < posts.data.length; i++) {","                var messageFrom = posts.data[i].from.id;","                (function (messageFrom, index) {","                    FB.api(messageFrom + '/picture', function (image) {","                        var post = posts.data[index];","                        postsCount = postsCount - 1;","                        var message = (post.message) ? post.message : ((post.story) ? post.story : null);","                        var fb_data = { message: message, portrait_image: image.data.url};","                        posts.data[index].fb_data = fb_data;","                        if (postsCount == 0) {","                            callback(posts);","                        }","                    });    ","                })(messageFrom, i);","            }","        });","    },","    ","    _loadFBComponents: function () {","        (function (d) {","            var js, id = 'facebook-jssdk',","                ref = d.getElementsByTagName('script')[0];","            if (d.getElementById(id)) {","                return;","            }","            js = d.createElement('script');","            js.id = id;","            js.async = true;","            js.src = \"http://connect.facebook.net/en_US/all.js\";","            ref.parentNode.insertBefore(js, ref);","        }(document, /*debug*/ false));","    },","","    _initDataAccess: function () {","        var me = this;","        window.fbAsyncInit = function () {","            me._initFBApi();","            me._checkLogin();","        };","    },","","    _initFBApi: function() {","        FB.init({","            appId: this.configuration.fbAppId,","            channelUrl: this.configuration.fbChannelFile,","            status: true,","            cookie: true,","            xfbml: true","        });","    },","    ","    _checkLogin: function() {","        var me = this;","        FB.getLoginStatus(function (response) {","            if (response.status === 'not_authorized' || response.status === 'not_logged_in') {","                me._login();","                return;","            }","            me.configuration.onInit(response);","        });","    },","    ","    _login: function () {","        var me = this;","        FB.login(function (response) {","            me.configuration.onInit(response);","        });","    }","","","};","","Y.FacebookDAO = FacebookDAO;","","}, '@VERSION@', {\"requires\": [\"base-build\", \"base\"]});"];
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].lines = {"1":0,"3":0,"4":0,"5":0,"6":0,"9":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"36":0,"37":0,"39":0,"40":0,"42":0,"43":0,"44":0,"45":0,"46":0,"51":0,"52":0,"53":0,"54":0,"59":0,"69":0,"70":0,"71":0,"72":0,"73":0,"75":0,"80":0,"81":0,"82":0,"89":0};
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].functions = {"FacebookDAO:3":0,"(anonymous 4):20":0,"(anonymous 3):19":0,"(anonymous 2):14":0,"listSitePosts:13":0,"(anonymous 5):36":0,"_loadFBComponents:35":0,"fbAsyncInit:52":0,"_initDataAccess:50":0,"_initFBApi:58":0,"(anonymous 6):70":0,"_checkLogin:68":0,"(anonymous 7):81":0,"_login:79":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].coveredLines = 44;
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].coveredFunctions = 15;
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 1);
YUI.add('gallery-facebook-dao', function (Y, NAME) {

_yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 3);
function FacebookDAO(arguments) {
    _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "FacebookDAO", 3);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 4);
this.configuration = arguments;
    _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 5);
this._initDataAccess();
    _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 6);
this._loadFBComponents();
}

_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 9);
FacebookDAO.prototype = {
    
    configuration: null,

    listSitePosts: function(siteId, callback) {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "listSitePosts", 13);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 14);
FB.api(siteId + '/feed', function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 2)", 14);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 15);
var posts = response;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 16);
var postsCount = posts.data.length;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 17);
for (var i = 0; i < posts.data.length; i++) {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 18);
var messageFrom = posts.data[i].from.id;
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 19);
(function (messageFrom, index) {
                    _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 3)", 19);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 20);
FB.api(messageFrom + '/picture', function (image) {
                        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 4)", 20);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 21);
var post = posts.data[index];
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 22);
postsCount = postsCount - 1;
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 23);
var message = (post.message) ? post.message : ((post.story) ? post.story : null);
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 24);
var fb_data = { message: message, portrait_image: image.data.url};
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 25);
posts.data[index].fb_data = fb_data;
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 26);
if (postsCount == 0) {
                            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 27);
callback(posts);
                        }
                    });    
                })(messageFrom, i);
            }
        });
    },
    
    _loadFBComponents: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_loadFBComponents", 35);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 36);
(function (d) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 5)", 36);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 37);
var js, id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 39);
if (d.getElementById(id)) {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 40);
return;
            }
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 42);
js = d.createElement('script');
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 43);
js.id = id;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 44);
js.async = true;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 45);
js.src = "http://connect.facebook.net/en_US/all.js";
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 46);
ref.parentNode.insertBefore(js, ref);
        }(document, /*debug*/ false));
    },

    _initDataAccess: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_initDataAccess", 50);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 51);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 52);
window.fbAsyncInit = function () {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "fbAsyncInit", 52);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 53);
me._initFBApi();
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 54);
me._checkLogin();
        };
    },

    _initFBApi: function() {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_initFBApi", 58);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 59);
FB.init({
            appId: this.configuration.fbAppId,
            channelUrl: this.configuration.fbChannelFile,
            status: true,
            cookie: true,
            xfbml: true
        });
    },
    
    _checkLogin: function() {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_checkLogin", 68);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 69);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 70);
FB.getLoginStatus(function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 6)", 70);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 71);
if (response.status === 'not_authorized' || response.status === 'not_logged_in') {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 72);
me._login();
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 73);
return;
            }
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 75);
me.configuration.onInit(response);
        });
    },
    
    _login: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_login", 79);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 80);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 81);
FB.login(function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 7)", 81);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 82);
me.configuration.onInit(response);
        });
    }


};

_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 89);
Y.FacebookDAO = FacebookDAO;

}, '@VERSION@', {"requires": ["base-build", "base"]});
