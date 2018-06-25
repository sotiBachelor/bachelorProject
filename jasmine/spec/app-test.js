describe("CDanwendung Test", function() {
    var app = null;
    var mainModel = null;
    var store = null;
    var controller = null;

    beforeEach(function() {
        // Test to see if the app loaded
        mainModel = Ext.create('CDanwendung.view.main.MainModel');
        store = Ext.StoreManager.lookup('Personnel');
        controller  = Ext.create('CDanwendung.view.main.MainController');
       
    }); // before each

    it('mainModel is loaded', function() {
        expect(mainModel != null).toBeTruthy();
    });

    it('Store shouldnt be null', function() {
        expect(store != null).toBeTruthy();
    });
    
    it("Controller shouldnt be null", function() {
        expect(controller != null).toBeTruthy();
    });

});


