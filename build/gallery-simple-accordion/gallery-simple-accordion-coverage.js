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
_yuitest_coverage["/build/gallery-simple-accordion/gallery-simple-accordion.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "/build/gallery-simple-accordion/gallery-simple-accordion.js",
    code: []
};
_yuitest_coverage["/build/gallery-simple-accordion/gallery-simple-accordion.js"].code=["YUI.add('gallery-simple-accordion', function(Y) {","","/**"," *  Simple accordion using an html list"," *  "," *  @author alejandro soto"," *  "," */","function SimpleAccordion(config) {","    SimpleAccordion.superclass.constructor.apply(this, arguments);","}","","SimpleAccordion.NAME = 'gallery-simple-accordion';","","SimpleAccordion.ATTRS = {","    animation: {","        value: {","            easing: 'ease',","            duration: 0.75","        }","    },","    ","    animated: {","        value: true","    }","    ","};","","Y.extend(SimpleAccordion, Y.Base, {","","    config: null,","","    _ACCORDION_ITEM: '.accordion-item',","    _ACCORDION_ITEM_LINK: '.accordion-item-link',","    _ACCORDION_ITEM_CONTENT: '.accordion-item-content',","    _HIDE: 'hide',","    _SHOW: 'show',","    _SELECTED: 'selected',","","    /**","     * This constructor method initializes the object and start rendering the carousel","     * ","     * @param cfg Module external configuration","     */","    initializer: function (cfg) {","        this.config = cfg;","        this._initializesItemClicked();","    },","","    /**","     * Initializes the carousel","     * ","     */","    _initializesItemClicked: function () {","        var cfg = this.config;","        var me = this;","        if (me.hasItems()) {","            cfg.mainNode.delegate('click', function (e) {","                e.preventDefault();","                me._deselectAllItems();","                var li = e.target.get('parentNode');","                var itemContent = li.one(me._ACCORDION_ITEM_CONTENT);","                li.addClass(me._SELECTED);","                if (itemContent) {","                    itemContent.removeClass(me._HIDE);","                    itemContent.addClass(me._SHOW);","                    me.slideDown(itemContent);","                }","            }, me._ACCORDION_ITEM_LINK);","        }","    },","","    ","    slideDown: function(node) {","        if (this.get('animated')) {","           this._slideDown(node);","        }","    },","    ","    slideUp: function(node) {","        if (this.get('animated')) {","            this._slideUp(node);","        }","    },","    ","    _slideDown: function(node) {","        node.setStyle('display', 'block');","        node.setStyle('overflow', 'hidden');","        this.get('animation').height = this._getNodeOffsetHeight(node) + 'px';","        node.setStyle('height', '0');","        node.transition(this.get('animation'), function() {","            node.setStyle('overflow', '');","        });","    },","    ","    _slideUp: function(node) {","        node.setStyle('display', 'block');","        node.setStyle('overflow', 'hidden');","        this.get('animation').height = 0;","        node.transition(this.get('animation'), function() {","            node.setStyle('height', '');","            node.setStyle('display', 'none');","            node.setStyle('overflow', '');","        });","    },","    ","    /**","     * Deselects all the items in the list","     * ","     */","    _deselectAllItems: function () {","        var me = this;","        var cfg = this.config;","        cfg.mainNode.all(this._ACCORDION_ITEM).each(function(node) {","            node.removeClass(me._SELECTED);","            var itemContent = node.one(me._ACCORDION_ITEM_CONTENT);","            if (itemContent && itemContent.hasClass(me._SHOW)) {","                itemContent.removeClass(me._SHOW);","                itemContent.addClass(me._HIDE);","                me.slideUp(itemContent);","            }","        });","    },","","    /**","     * Validates if the list has items","     * ","     */","    hasItems: function () {","        var cfg = this.config;","        return cfg.mainNode && cfg.mainNode.all(this._ACCORDION_ITEM_LINK).size() > 0;","    },","    ","    ","    /**","     * Obtains the precise height of the node provided, including padding and border.","     *","     * @method _getNodeOffsetHeight","     * @protected","     * @param node {Node|HTMLElement} The node to gather the height from","     * @return {Number} The calculated height or zero in case of failure","     */","    _getNodeOffsetHeight: function( node ){","        var height, preciseRegion;","        height = node.get('offsetHeight');","        return Y.Lang.isValue( height ) ? height : 0;","    },","","    /**","     * Destructor","     * ","     */","    destructor: function () {","","    }","});","","Y.SimpleAccordion = SimpleAccordion;","","","}, '@VERSION@' ,{requires:['base','node','node-event-delegate','transition'], skinnable:false});"];
_yuitest_coverage["/build/gallery-simple-accordion/gallery-simple-accordion.js"].lines = {"1":0,"9":0,"10":0,"13":0,"15":0,"29":0,"46":0,"47":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"75":0,"76":0,"81":0,"82":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"97":0,"98":0,"99":0,"100":0,"101":0,"102":0,"103":0,"112":0,"113":0,"114":0,"115":0,"116":0,"117":0,"118":0,"119":0,"120":0,"130":0,"131":0,"144":0,"145":0,"146":0,"158":0};
_yuitest_coverage["/build/gallery-simple-accordion/gallery-simple-accordion.js"].functions = {"SimpleAccordion:9":0,"initializer:45":0,"(anonymous 2):58":0,"_initializesItemClicked:54":0,"slideDown:74":0,"slideUp:80":0,"(anonymous 3):91":0,"_slideDown:86":0,"(anonymous 4):100":0,"_slideUp:96":0,"(anonymous 5):114":0,"_deselectAllItems:111":0,"hasItems:129":0,"_getNodeOffsetHeight:143":0,"(anonymous 1):1":0};
_yuitest_coverage["/build/gallery-simple-accordion/gallery-simple-accordion.js"].coveredLines = 53;
_yuitest_coverage["/build/gallery-simple-accordion/gallery-simple-accordion.js"].coveredFunctions = 15;
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 1);
YUI.add('gallery-simple-accordion', function(Y) {

/**
 *  Simple accordion using an html list
 *  
 *  @author alejandro soto
 *  
 */
_yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "(anonymous 1)", 1);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 9);
function SimpleAccordion(config) {
    _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "SimpleAccordion", 9);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 10);
SimpleAccordion.superclass.constructor.apply(this, arguments);
}

_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 13);
SimpleAccordion.NAME = 'gallery-simple-accordion';

_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 15);
SimpleAccordion.ATTRS = {
    animation: {
        value: {
            easing: 'ease',
            duration: 0.75
        }
    },
    
    animated: {
        value: true
    }
    
};

_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 29);
Y.extend(SimpleAccordion, Y.Base, {

    config: null,

    _ACCORDION_ITEM: '.accordion-item',
    _ACCORDION_ITEM_LINK: '.accordion-item-link',
    _ACCORDION_ITEM_CONTENT: '.accordion-item-content',
    _HIDE: 'hide',
    _SHOW: 'show',
    _SELECTED: 'selected',

    /**
     * This constructor method initializes the object and start rendering the carousel
     * 
     * @param cfg Module external configuration
     */
    initializer: function (cfg) {
        _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "initializer", 45);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 46);
this.config = cfg;
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 47);
this._initializesItemClicked();
    },

    /**
     * Initializes the carousel
     * 
     */
    _initializesItemClicked: function () {
        _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "_initializesItemClicked", 54);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 55);
var cfg = this.config;
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 56);
var me = this;
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 57);
if (me.hasItems()) {
            _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 58);
cfg.mainNode.delegate('click', function (e) {
                _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "(anonymous 2)", 58);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 59);
e.preventDefault();
                _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 60);
me._deselectAllItems();
                _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 61);
var li = e.target.get('parentNode');
                _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 62);
var itemContent = li.one(me._ACCORDION_ITEM_CONTENT);
                _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 63);
li.addClass(me._SELECTED);
                _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 64);
if (itemContent) {
                    _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 65);
itemContent.removeClass(me._HIDE);
                    _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 66);
itemContent.addClass(me._SHOW);
                    _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 67);
me.slideDown(itemContent);
                }
            }, me._ACCORDION_ITEM_LINK);
        }
    },

    
    slideDown: function(node) {
        _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "slideDown", 74);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 75);
if (this.get('animated')) {
           _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 76);
this._slideDown(node);
        }
    },
    
    slideUp: function(node) {
        _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "slideUp", 80);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 81);
if (this.get('animated')) {
            _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 82);
this._slideUp(node);
        }
    },
    
    _slideDown: function(node) {
        _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "_slideDown", 86);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 87);
node.setStyle('display', 'block');
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 88);
node.setStyle('overflow', 'hidden');
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 89);
this.get('animation').height = this._getNodeOffsetHeight(node) + 'px';
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 90);
node.setStyle('height', '0');
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 91);
node.transition(this.get('animation'), function() {
            _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "(anonymous 3)", 91);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 92);
node.setStyle('overflow', '');
        });
    },
    
    _slideUp: function(node) {
        _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "_slideUp", 96);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 97);
node.setStyle('display', 'block');
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 98);
node.setStyle('overflow', 'hidden');
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 99);
this.get('animation').height = 0;
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 100);
node.transition(this.get('animation'), function() {
            _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "(anonymous 4)", 100);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 101);
node.setStyle('height', '');
            _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 102);
node.setStyle('display', 'none');
            _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 103);
node.setStyle('overflow', '');
        });
    },
    
    /**
     * Deselects all the items in the list
     * 
     */
    _deselectAllItems: function () {
        _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "_deselectAllItems", 111);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 112);
var me = this;
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 113);
var cfg = this.config;
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 114);
cfg.mainNode.all(this._ACCORDION_ITEM).each(function(node) {
            _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "(anonymous 5)", 114);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 115);
node.removeClass(me._SELECTED);
            _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 116);
var itemContent = node.one(me._ACCORDION_ITEM_CONTENT);
            _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 117);
if (itemContent && itemContent.hasClass(me._SHOW)) {
                _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 118);
itemContent.removeClass(me._SHOW);
                _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 119);
itemContent.addClass(me._HIDE);
                _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 120);
me.slideUp(itemContent);
            }
        });
    },

    /**
     * Validates if the list has items
     * 
     */
    hasItems: function () {
        _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "hasItems", 129);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 130);
var cfg = this.config;
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 131);
return cfg.mainNode && cfg.mainNode.all(this._ACCORDION_ITEM_LINK).size() > 0;
    },
    
    
    /**
     * Obtains the precise height of the node provided, including padding and border.
     *
     * @method _getNodeOffsetHeight
     * @protected
     * @param node {Node|HTMLElement} The node to gather the height from
     * @return {Number} The calculated height or zero in case of failure
     */
    _getNodeOffsetHeight: function( node ){
        _yuitest_coverfunc("/build/gallery-simple-accordion/gallery-simple-accordion.js", "_getNodeOffsetHeight", 143);
_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 144);
var height, preciseRegion;
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 145);
height = node.get('offsetHeight');
        _yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 146);
return Y.Lang.isValue( height ) ? height : 0;
    },

    /**
     * Destructor
     * 
     */
    destructor: function () {

    }
});

_yuitest_coverline("/build/gallery-simple-accordion/gallery-simple-accordion.js", 158);
Y.SimpleAccordion = SimpleAccordion;


}, '@VERSION@' ,{requires:['base','node','node-event-delegate','transition'], skinnable:false});
