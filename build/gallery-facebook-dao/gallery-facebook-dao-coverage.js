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
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].code=["YUI.add('gallery-facebook-dao', function (Y, NAME) {","","/**"," * Facebook dao is an utility to add progressive functionality to retrieve and update data from facebook using graph api"," *"," * @class FacebookDAO"," * @module gallery-facebook-dao"," * @constructor"," * @param configuration {Object} Is the configuration object"," */","function FacebookDAO(configuration) {","    this.configuration = configuration;","    this._initDataAccess();","    this._loadFBComponents();","}","","FacebookDAO.prototype = {","","    /**","     * Configuration object","     *","     * @property configuration","     * @type {Object}","     */","    configuration: {","","        fbAppId: null","    },","","    /**","     * Retrieves the list of posts of sites or pages from facebook","     *","     * @method listSitePosts","     * @param {String} siteId Is the site id of the site or page where are going to be retrieved the posts","     * @param {Function} callback A callback function executed when the results are ready","     */","    listSitePosts: function (siteId, callback) {","        FB.api(siteId + '/feed', function (response) {","            var posts = response;","            var postsCount = posts.data.length;","            for (var i = 0; i < posts.data.length; i++) {","                var messageFrom = posts.data[i].from.id;","                (function (messageFrom, index) {","                    FB.api(messageFrom + '/picture', function (image) {","                        var post = posts.data[index];","                        postsCount = postsCount - 1;","                        var message = (post.message) ? post.message : ((post.story) ? post.story : null);","                        var fb_data = {","                            message: message,","                            portrait_image: image.data.url","                        };","                        posts.data[index].fb_data = fb_data;","                        if (postsCount == 0) {","                            callback(posts);","                        }","                    });","                })(messageFrom, i);","            }","        });","    },","","    _loadFBComponents: function () {","        (function (d) {","            var js, id = 'facebook-jssdk',","                ref = d.getElementsByTagName('script')[0];","            if (d.getElementById(id)) {","                return;","            }","            js = d.createElement('script');","            js.id = id;","            js.async = true;","            js.src = \"http://connect.facebook.net/en_US/all.js\";","            ref.parentNode.insertBefore(js, ref);","        }(document, false));","    },","","    _initDataAccess: function () {","        var me = this;","        window.fbAsyncInit = function () {","            me._initFBApi();","            me._checkLogin();","        };","    },","","    _initFBApi: function () {","        FB.init({","            appId: this.configuration.fbAppId,","            channelUrl: this.configuration.fbChannelFile,","            status: true,","            cookie: true,","            xfbml: true","        });","    },","","    _checkLogin: function () {","        var me = this;","        FB.getLoginStatus(function (response) {","            if (response.status === 'not_authorized' || response.status === 'not_logged_in') {","                me._login();","                return;","            }","            me.configuration.onInit(response);","        });","    },","","    _login: function () {","        var me = this;","        FB.login(function (response) {","            me.configuration.onInit(response);","        });","    }","","","};","","Y.FacebookDAO = FacebookDAO;","","}, '@VERSION@', {\"requires\": [\"base-build\", \"base\"]});"];
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].lines = {"1":0,"11":0,"12":0,"13":0,"14":0,"17":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"52":0,"53":0,"54":0,"63":0,"64":0,"66":0,"67":0,"69":0,"70":0,"71":0,"72":0,"73":0,"78":0,"79":0,"80":0,"81":0,"86":0,"96":0,"97":0,"98":0,"99":0,"100":0,"102":0,"107":0,"108":0,"109":0,"116":0};
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].functions = {"FacebookDAO:11":0,"(anonymous 4):44":0,"(anonymous 3):43":0,"(anonymous 2):38":0,"listSitePosts:37":0,"(anonymous 5):63":0,"_loadFBComponents:62":0,"fbAsyncInit:79":0,"_initDataAccess:77":0,"_initFBApi:85":0,"(anonymous 6):97":0,"_checkLogin:95":0,"(anonymous 7):108":0,"_login:106":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].coveredLines = 44;
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].coveredFunctions = 15;
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 1);
YUI.add('gallery-facebook-dao', function (Y, NAME) {

/**
 * Facebook dao is an utility to add progressive functionality to retrieve and update data from facebook using graph api
 *
 * @class FacebookDAO
 * @module gallery-facebook-dao
 * @constructor
 * @param configuration {Object} Is the configuration object
 */
_yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 11);
function FacebookDAO(configuration) {
    _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "FacebookDAO", 11);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 12);
this.configuration = configuration;
    _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 13);
this._initDataAccess();
    _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 14);
this._loadFBComponents();
}

_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 17);
FacebookDAO.prototype = {

    /**
     * Configuration object
     *
     * @property configuration
     * @type {Object}
     */
    configuration: {

        fbAppId: null
    },

    /**
     * Retrieves the list of posts of sites or pages from facebook
     *
     * @method listSitePosts
     * @param {String} siteId Is the site id of the site or page where are going to be retrieved the posts
     * @param {Function} callback A callback function executed when the results are ready
     */
    listSitePosts: function (siteId, callback) {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "listSitePosts", 37);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 38);
FB.api(siteId + '/feed', function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 2)", 38);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 39);
var posts = response;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 40);
var postsCount = posts.data.length;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 41);
for (var i = 0; i < posts.data.length; i++) {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 42);
var messageFrom = posts.data[i].from.id;
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 43);
(function (messageFrom, index) {
                    _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 3)", 43);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 44);
FB.api(messageFrom + '/picture', function (image) {
                        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 4)", 44);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 45);
var post = posts.data[index];
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 46);
postsCount = postsCount - 1;
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 47);
var message = (post.message) ? post.message : ((post.story) ? post.story : null);
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 48);
var fb_data = {
                            message: message,
                            portrait_image: image.data.url
                        };
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 52);
posts.data[index].fb_data = fb_data;
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 53);
if (postsCount == 0) {
                            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 54);
callback(posts);
                        }
                    });
                })(messageFrom, i);
            }
        });
    },

    _loadFBComponents: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_loadFBComponents", 62);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 63);
(function (d) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 5)", 63);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 64);
var js, id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 66);
if (d.getElementById(id)) {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 67);
return;
            }
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 69);
js = d.createElement('script');
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 70);
js.id = id;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 71);
js.async = true;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 72);
js.src = "http://connect.facebook.net/en_US/all.js";
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 73);
ref.parentNode.insertBefore(js, ref);
        }(document, false));
    },

    _initDataAccess: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_initDataAccess", 77);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 78);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 79);
window.fbAsyncInit = function () {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "fbAsyncInit", 79);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 80);
me._initFBApi();
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 81);
me._checkLogin();
        };
    },

    _initFBApi: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_initFBApi", 85);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 86);
FB.init({
            appId: this.configuration.fbAppId,
            channelUrl: this.configuration.fbChannelFile,
            status: true,
            cookie: true,
            xfbml: true
        });
    },

    _checkLogin: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_checkLogin", 95);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 96);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 97);
FB.getLoginStatus(function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 6)", 97);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 98);
if (response.status === 'not_authorized' || response.status === 'not_logged_in') {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 99);
me._login();
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 100);
return;
            }
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 102);
me.configuration.onInit(response);
        });
    },

    _login: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_login", 106);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 107);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 108);
FB.login(function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 7)", 108);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 109);
me.configuration.onInit(response);
        });
    }


};

_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 116);
Y.FacebookDAO = FacebookDAO;

}, '@VERSION@', {"requires": ["base-build", "base"]});
