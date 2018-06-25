describe("Testanwendung Tests", function() {
   // var app = null;
    var mainPanel = null;
    var questionStore = null;
    var grid = null;
    var model = null;
    var storeLength = -1;
    var controller = null;

    beforeEach(function() {
        // Test to see if the app loaded
        mainPanel = Ext.create('QAApp.view.MainPanel');
        questionStore = Ext.StoreManager.lookup('QuestionStore');
        controller  = Ext.create('QAApp.controller.QuestionController');
        grid = Ext.getCmp("questionGrid");
        model = Ext.create('QAApp.model.Question');
        storeLength = questionStore.data.items.length;
    }); // before each

    it('MainView is loaded', function() {
        expect(mainPanel != null).toBeTruthy();
    });

    it('Store is loaded', function() {
        expect(questionStore != null).toBeTruthy();
    });
    
    it("Controller is loaded", function() {
        expect(controller != null).toBeTruthy();
    });

    it("Grid is loaded", function() {
        expect(grid != null).toBeTruthy();
    });

    it("Model is loaded", function() {
        expect(model != null).toBeTruthy();
    });
    

it("New item should be added to store", function() {
   
    model.id = 1;
    model.question = 'Questions 3';
    questionStore.add(model);
    expect(questionStore.data.items.length).toBe(storeLength + 1);
    questionStore.removeAt(storeLength);
});

it("Item should be removed from store", function() {
   
    model.id = 1;
    model.question = 'Questions 3';
    questionStore.add(model);


    controller.deleteQuestionFromStore(model);
    
    questionStore.removeAt(storeLength);
    expect(questionStore.data.items.length).toBe(storeLength);
});


it("Error on empty input field", function() {
    var form = Ext.getCmp("questionForm");
    var textareaf = form.query('textareafield');

    for(var i=0; i<textareaf.length; i++){
        expect(textareaf[i].allowBlank).toBe(false);
    }

});

it("Error if not at least 5 characters", function() {
    var form = Ext.getCmp("questionForm");
    var questionField = form.getForm().findField('question');

    expect(questionField.minLength).toBe(5);
    
});

});//describe
