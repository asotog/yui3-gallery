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
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].code=["YUI.add('gallery-facebook-dao', function (Y, NAME) {","","/**","* This is the description for my class.","*","* @class MyClass","* @constructor","*/","function FacebookDAO(arguments) {","    this.configuration = arguments;","    this._initDataAccess();","    this._loadFBComponents();","}","","FacebookDAO.prototype = {","    ","    configuration: null,","","    listSitePosts: function(siteId, callback) {","        FB.api(siteId + '/feed', function (response) {","            var posts = response;","            var postsCount = posts.data.length;","            for (var i = 0; i < posts.data.length; i++) {","                var messageFrom = posts.data[i].from.id;","                (function (messageFrom, index) {","                    FB.api(messageFrom + '/picture', function (image) {","                        var post = posts.data[index];","                        postsCount = postsCount - 1;","                        var message = (post.message) ? post.message : ((post.story) ? post.story : null);","                        var fb_data = { message: message, portrait_image: image.data.url};","                        posts.data[index].fb_data = fb_data;","                        if (postsCount == 0) {","                            callback(posts);","                        }","                    });    ","                })(messageFrom, i);","            }","        });","    },","    ","    _loadFBComponents: function () {","        (function (d) {","            var js, id = 'facebook-jssdk',","                ref = d.getElementsByTagName('script')[0];","            if (d.getElementById(id)) {","                return;","            }","            js = d.createElement('script');","            js.id = id;","            js.async = true;","            js.src = \"http://connect.facebook.net/en_US/all.js\";","            ref.parentNode.insertBefore(js, ref);","        }(document, /*debug*/ false));","    },","","    _initDataAccess: function () {","        var me = this;","        window.fbAsyncInit = function () {","            me._initFBApi();","            me._checkLogin();","        };","    },","","    _initFBApi: function() {","        FB.init({","            appId: this.configuration.fbAppId,","            channelUrl: this.configuration.fbChannelFile,","            status: true,","            cookie: true,","            xfbml: true","        });","    },","    ","    _checkLogin: function() {","        var me = this;","        FB.getLoginStatus(function (response) {","            if (response.status === 'not_authorized' || response.status === 'not_logged_in') {","                me._login();","                return;","            }","            me.configuration.onInit(response);","        });","    },","    ","    _login: function () {","        var me = this;","        FB.login(function (response) {","            me.configuration.onInit(response);","        });","    }","","","};","","Y.FacebookDAO = FacebookDAO;","","}, '@VERSION@', {\"requires\": [\"base-build\", \"base\"]});"];
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].lines = {"1":0,"9":0,"10":0,"11":0,"12":0,"15":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"42":0,"43":0,"45":0,"46":0,"48":0,"49":0,"50":0,"51":0,"52":0,"57":0,"58":0,"59":0,"60":0,"65":0,"75":0,"76":0,"77":0,"78":0,"79":0,"81":0,"86":0,"87":0,"88":0,"95":0};
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].functions = {"FacebookDAO:9":0,"(anonymous 4):26":0,"(anonymous 3):25":0,"(anonymous 2):20":0,"listSitePosts:19":0,"(anonymous 5):42":0,"_loadFBComponents:41":0,"fbAsyncInit:58":0,"_initDataAccess:56":0,"_initFBApi:64":0,"(anonymous 6):76":0,"_checkLogin:74":0,"(anonymous 7):87":0,"_login:85":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].coveredLines = 44;
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].coveredFunctions = 15;
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 1);
YUI.add('gallery-facebook-dao', function (Y, NAME) {

/**
* This is the description for my class.
*
* @class MyClass
* @constructor
*/
_yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 9);
function FacebookDAO(arguments) {
    _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "FacebookDAO", 9);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 10);
this.configuration = arguments;
    _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 11);
this._initDataAccess();
    _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 12);
this._loadFBComponents();
}

_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 15);
FacebookDAO.prototype = {
    
    configuration: null,

    listSitePosts: function(siteId, callback) {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "listSitePosts", 19);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 20);
FB.api(siteId + '/feed', function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 2)", 20);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 21);
var posts = response;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 22);
var postsCount = posts.data.length;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 23);
for (var i = 0; i < posts.data.length; i++) {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 24);
var messageFrom = posts.data[i].from.id;
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 25);
(function (messageFrom, index) {
                    _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 3)", 25);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 26);
FB.api(messageFrom + '/picture', function (image) {
                        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 4)", 26);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 27);
var post = posts.data[index];
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 28);
postsCount = postsCount - 1;
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 29);
var message = (post.message) ? post.message : ((post.story) ? post.story : null);
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 30);
var fb_data = { message: message, portrait_image: image.data.url};
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 31);
posts.data[index].fb_data = fb_data;
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 32);
if (postsCount == 0) {
                            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 33);
callback(posts);
                        }
                    });    
                })(messageFrom, i);
            }
        });
    },
    
    _loadFBComponents: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_loadFBComponents", 41);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 42);
(function (d) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 5)", 42);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 43);
var js, id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 45);
if (d.getElementById(id)) {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 46);
return;
            }
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 48);
js = d.createElement('script');
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 49);
js.id = id;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 50);
js.async = true;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 51);
js.src = "http://connect.facebook.net/en_US/all.js";
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 52);
ref.parentNode.insertBefore(js, ref);
        }(document, /*debug*/ false));
    },

    _initDataAccess: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_initDataAccess", 56);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 57);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 58);
window.fbAsyncInit = function () {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "fbAsyncInit", 58);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 59);
me._initFBApi();
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 60);
me._checkLogin();
        };
    },

    _initFBApi: function() {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_initFBApi", 64);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 65);
FB.init({
            appId: this.configuration.fbAppId,
            channelUrl: this.configuration.fbChannelFile,
            status: true,
            cookie: true,
            xfbml: true
        });
    },
    
    _checkLogin: function() {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_checkLogin", 74);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 75);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 76);
FB.getLoginStatus(function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 6)", 76);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 77);
if (response.status === 'not_authorized' || response.status === 'not_logged_in') {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 78);
me._login();
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 79);
return;
            }
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 81);
me.configuration.onInit(response);
        });
    },
    
    _login: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_login", 85);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 86);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 87);
FB.login(function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 7)", 87);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 88);
me.configuration.onInit(response);
        });
    }


};

_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 95);
Y.FacebookDAO = FacebookDAO;

}, '@VERSION@', {"requires": ["base-build", "base"]});
