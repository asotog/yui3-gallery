YUI.add('module-tests', function(Y) {

    var suite = new Y.Test.Suite('gallery-facebook-widget');

    suite.add(new Y.Test.Case({
        name: 'Automated Tests',
        
        basicFB: null,
        
        setUp : function () {

	    },
        
        'Test normal posts display': function() {
        	this.basicFB = new Y.FacebookWidget({ srcNode: '#demo', fbAppId: '337209605514', fbSiteId: 'noticiasrepretelcostarica'});
	        this.basicFB.render();
            Y.Assert.fail('No Tests Provided For This Module');
        }
    }));

    Y.Test.Runner.add(suite);


},'', { requires: ['gallery-facebook-widget', 'test'] });
