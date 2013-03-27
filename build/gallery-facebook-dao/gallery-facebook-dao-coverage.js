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
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].code=["YUI.add('gallery-facebook-dao', function (Y, NAME) {","","/**","* Facebook dao is an utility to add progressive functionality to retrieve and update data from facebook using graph api","*","* @class FacebookDAO","* @module gallery-facebook-dao","* @constructor","*/","function FacebookDAO(arguments) {","    this.configuration = arguments;","    this._initDataAccess();","    this._loadFBComponents();","}","","FacebookDAO.prototype = {","    ","    /**","	* Configuration object","	* ","	* @property configuration","	* @type {Object}","	*/","    configuration: null,","","	/**","	* Retrieves the list of posts of sites or page from facebook","	*","	* @method listSitePosts","	* @param {String} siteId Is the site id of the site or page where are going to be retrieved the posts","	* @param {Function} callback A callback function executed when the results are ready","	*/","    listSitePosts: function(siteId, callback) {","        FB.api(siteId + '/feed', function (response) {","            var posts = response;","            var postsCount = posts.data.length;","            for (var i = 0; i < posts.data.length; i++) {","                var messageFrom = posts.data[i].from.id;","                (function (messageFrom, index) {","                    FB.api(messageFrom + '/picture', function (image) {","                        var post = posts.data[index];","                        postsCount = postsCount - 1;","                        var message = (post.message) ? post.message : ((post.story) ? post.story : null);","                        var fb_data = { message: message, portrait_image: image.data.url};","                        posts.data[index].fb_data = fb_data;","                        if (postsCount == 0) {","                            callback(posts);","                        }","                    });    ","                })(messageFrom, i);","            }","        });","    },","    ","    _loadFBComponents: function () {","        (function (d) {","            var js, id = 'facebook-jssdk',","                ref = d.getElementsByTagName('script')[0];","            if (d.getElementById(id)) {","                return;","            }","            js = d.createElement('script');","            js.id = id;","            js.async = true;","            js.src = \"http://connect.facebook.net/en_US/all.js\";","            ref.parentNode.insertBefore(js, ref);","        }(document, /*debug*/ false));","    },","","    _initDataAccess: function () {","        var me = this;","        window.fbAsyncInit = function () {","            me._initFBApi();","            me._checkLogin();","        };","    },","","    _initFBApi: function() {","        FB.init({","            appId: this.configuration.fbAppId,","            channelUrl: this.configuration.fbChannelFile,","            status: true,","            cookie: true,","            xfbml: true","        });","    },","    ","    _checkLogin: function() {","        var me = this;","        FB.getLoginStatus(function (response) {","            if (response.status === 'not_authorized' || response.status === 'not_logged_in') {","                me._login();","                return;","            }","            me.configuration.onInit(response);","        });","    },","    ","    _login: function () {","        var me = this;","        FB.login(function (response) {","            me.configuration.onInit(response);","        });","    }","","","};","","Y.FacebookDAO = FacebookDAO;","","}, '@VERSION@', {\"requires\": [\"base-build\", \"base\"]});"];
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].lines = {"1":0,"10":0,"11":0,"12":0,"13":0,"16":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"56":0,"57":0,"59":0,"60":0,"62":0,"63":0,"64":0,"65":0,"66":0,"71":0,"72":0,"73":0,"74":0,"79":0,"89":0,"90":0,"91":0,"92":0,"93":0,"95":0,"100":0,"101":0,"102":0,"109":0};
_yuitest_coverage["build/gallery-facebook-dao/gallery-facebook-dao.js"].functions = {"FacebookDAO:10":0,"(anonymous 4):40":0,"(anonymous 3):39":0,"(anonymous 2):34":0,"listSitePosts:33":0,"(anonymous 5):56":0,"_loadFBComponents:55":0,"fbAsyncInit:72":0,"_initDataAccess:70":0,"_initFBApi:78":0,"(anonymous 6):90":0,"_checkLogin:88":0,"(anonymous 7):101":0,"_login:99":0,"(anonymous 1):1":0};
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
*/
_yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 10);
function FacebookDAO(arguments) {
    _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "FacebookDAO", 10);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 11);
this.configuration = arguments;
    _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 12);
this._initDataAccess();
    _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 13);
this._loadFBComponents();
}

_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 16);
FacebookDAO.prototype = {
    
    /**
	* Configuration object
	* 
	* @property configuration
	* @type {Object}
	*/
    configuration: null,

	/**
	* Retrieves the list of posts of sites or page from facebook
	*
	* @method listSitePosts
	* @param {String} siteId Is the site id of the site or page where are going to be retrieved the posts
	* @param {Function} callback A callback function executed when the results are ready
	*/
    listSitePosts: function(siteId, callback) {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "listSitePosts", 33);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 34);
FB.api(siteId + '/feed', function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 2)", 34);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 35);
var posts = response;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 36);
var postsCount = posts.data.length;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 37);
for (var i = 0; i < posts.data.length; i++) {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 38);
var messageFrom = posts.data[i].from.id;
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 39);
(function (messageFrom, index) {
                    _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 3)", 39);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 40);
FB.api(messageFrom + '/picture', function (image) {
                        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 4)", 40);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 41);
var post = posts.data[index];
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 42);
postsCount = postsCount - 1;
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 43);
var message = (post.message) ? post.message : ((post.story) ? post.story : null);
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 44);
var fb_data = { message: message, portrait_image: image.data.url};
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 45);
posts.data[index].fb_data = fb_data;
                        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 46);
if (postsCount == 0) {
                            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 47);
callback(posts);
                        }
                    });    
                })(messageFrom, i);
            }
        });
    },
    
    _loadFBComponents: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_loadFBComponents", 55);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 56);
(function (d) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 5)", 56);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 57);
var js, id = 'facebook-jssdk',
                ref = d.getElementsByTagName('script')[0];
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 59);
if (d.getElementById(id)) {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 60);
return;
            }
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 62);
js = d.createElement('script');
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 63);
js.id = id;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 64);
js.async = true;
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 65);
js.src = "http://connect.facebook.net/en_US/all.js";
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 66);
ref.parentNode.insertBefore(js, ref);
        }(document, /*debug*/ false));
    },

    _initDataAccess: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_initDataAccess", 70);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 71);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 72);
window.fbAsyncInit = function () {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "fbAsyncInit", 72);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 73);
me._initFBApi();
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 74);
me._checkLogin();
        };
    },

    _initFBApi: function() {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_initFBApi", 78);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 79);
FB.init({
            appId: this.configuration.fbAppId,
            channelUrl: this.configuration.fbChannelFile,
            status: true,
            cookie: true,
            xfbml: true
        });
    },
    
    _checkLogin: function() {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_checkLogin", 88);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 89);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 90);
FB.getLoginStatus(function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 6)", 90);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 91);
if (response.status === 'not_authorized' || response.status === 'not_logged_in') {
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 92);
me._login();
                _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 93);
return;
            }
            _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 95);
me.configuration.onInit(response);
        });
    },
    
    _login: function () {
        _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "_login", 99);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 100);
var me = this;
        _yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 101);
FB.login(function (response) {
            _yuitest_coverfunc("build/gallery-facebook-dao/gallery-facebook-dao.js", "(anonymous 7)", 101);
_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 102);
me.configuration.onInit(response);
        });
    }


};

_yuitest_coverline("build/gallery-facebook-dao/gallery-facebook-dao.js", 109);
Y.FacebookDAO = FacebookDAO;

}, '@VERSION@', {"requires": ["base-build", "base"]});
