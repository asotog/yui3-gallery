YUI.add('gallery-facebook-widget', function (Y, NAME) {


/**
 Your Code Goes Here
*/
YUI.add('gallery-facebook-widget', function (Y) {

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
