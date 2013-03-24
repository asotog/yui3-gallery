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
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].code=["YUI.add('gallery-facebook-widget', function (Y, NAME) {","","","/**"," Your Code Goes Here","*/","YUI.add('gallery-facebook-widget', function (Y) {","","    Y.FacebookWidget = Y.Base.create('gallery-facebook-widget', Y.Widget, [], {","            ","        destructor: function () {","","        },","     ","        bindUI: function () {","","        },","        syncUI: function () {","","        }","    }, {","        ATTRS: {","           ","        },","        HTML_PARSER: {","","        }","    });","}, '1.1', {","    requires: ['base-build', 'widget']","});","","","}, '@VERSION@', {\"requires\": [\"widget\"]});"];
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].lines = {"1":0,"7":0,"9":0};
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].functions = {"(anonymous 2):7":0,"(anonymous 1):1":0};
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].coveredLines = 3;
_yuitest_coverage["build/gallery-facebook-widget/gallery-facebook-widget.js"].coveredFunctions = 2;
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 1);
YUI.add('gallery-facebook-widget', function (Y, NAME) {


/**
 Your Code Goes Here
*/
_yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "(anonymous 1)", 1);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 7);
YUI.add('gallery-facebook-widget', function (Y) {

    _yuitest_coverfunc("build/gallery-facebook-widget/gallery-facebook-widget.js", "(anonymous 2)", 7);
_yuitest_coverline("build/gallery-facebook-widget/gallery-facebook-widget.js", 9);
Y.FacebookWidget = Y.Base.create('gallery-facebook-widget', Y.Widget, [], {
            
        destructor: function () {

        },
     
        bindUI: function () {

        },
        syncUI: function () {

        }
    }, {
        ATTRS: {
           
        },
        HTML_PARSER: {

        }
    });
}, '1.1', {
    requires: ['base-build', 'widget']
});


}, '@VERSION@', {"requires": ["widget"]});
