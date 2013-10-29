YUI.add('gallery-simple-accordion', function(Y) {

/**
 *  Simple accordion using an html list
 *  
 *  @author alejandro soto
 *  
 */
function SimpleAccordion(config) {
    SimpleAccordion.superclass.constructor.apply(this, arguments);
}

SimpleAccordion.NAME = 'gallery-simple-accordion';

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
        this.config = cfg;
        this._initializesItemClicked();
    },

    /**
     * Initializes the carousel
     * 
     */
    _initializesItemClicked: function () {
        var cfg = this.config;
        var me = this;
        if (me.hasItems()) {
            cfg.mainNode.delegate('click', function (e) {
                e.preventDefault();
                me._deselectAllItems();
                var li = e.target.get('parentNode');
                var itemContent = li.one(me._ACCORDION_ITEM_CONTENT);
                li.addClass(me._SELECTED);
                if (itemContent) {
                    itemContent.removeClass(me._HIDE);
                    itemContent.addClass(me._SHOW);
                    me.slideDown(itemContent);
                }
            }, me._ACCORDION_ITEM_LINK);
        }
    },

    
    slideDown: function(node) {
        if (this.get('animated')) {
           this._slideDown(node);
        }
    },
    
    slideUp: function(node) {
        if (this.get('animated')) {
            this._slideUp(node);
        }
    },
    
    _slideDown: function(node) {
        node.setStyle('display', 'block');
        node.setStyle('overflow', 'hidden');
        this.get('animation').height = this._getNodeOffsetHeight(node) + 'px';
        node.setStyle('height', '0');
        node.transition(this.get('animation'), function() {
            node.setStyle('overflow', '');
        });
    },
    
    _slideUp: function(node) {
        node.setStyle('display', 'block');
        node.setStyle('overflow', 'hidden');
        this.get('animation').height = 0;
        node.transition(this.get('animation'), function() {
            node.setStyle('height', '');
            node.setStyle('display', 'none');
            node.setStyle('overflow', '');
        });
    },
    
    /**
     * Deselects all the items in the list
     * 
     */
    _deselectAllItems: function () {
        var me = this;
        var cfg = this.config;
        cfg.mainNode.all(this._ACCORDION_ITEM).each(function(node) {
            node.removeClass(me._SELECTED);
            var itemContent = node.one(me._ACCORDION_ITEM_CONTENT);
            if (itemContent && itemContent.hasClass(me._SHOW)) {
                itemContent.removeClass(me._SHOW);
                itemContent.addClass(me._HIDE);
                me.slideUp(itemContent);
            }
        });
    },

    /**
     * Validates if the list has items
     * 
     */
    hasItems: function () {
        var cfg = this.config;
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
        var height, preciseRegion;
        height = node.get('offsetHeight');
        return Y.Lang.isValue( height ) ? height : 0;
    },

    /**
     * Destructor
     * 
     */
    destructor: function () {

    }
});

Y.SimpleAccordion = SimpleAccordion;


}, '@VERSION@' ,{requires:['base','node','node-event-delegate','transition'], skinnable:false});
