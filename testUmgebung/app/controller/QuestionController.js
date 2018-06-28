Ext.define("QAApp.controller.QuestionController", {
    extend: 'Ext.app.Controller',
    employeePanelList: ['MainPanel', 'QuestionForm', 'QuestionGrid'],
    init: function() {
        //console.log("BenchTradeController Initialized");
        this.control({
            // Sets the current employee
            "gridpanel[itemId='questionGrid']": {
                itemdblclick: this.loadQuestionDetails,
                deleteQuestion: this.deleteQuestionFromStore
            },
            // Handles the update request of visa details.
            "button[itemId='btnSaveQuestion']": {
                click: this.saveQuestion
            }
        }
        );
    },
    deleteQuestionFromStore: function(record) {
        var qStore = Ext.StoreManager.lookup("QuestionStore");
        //alert(rec.get('id'));
        qStore.remove(record);
    },
    loadQuestionDetails: function(grid, record)
    {
        var qForm = Ext.getCmp("questionForm");
        qForm.setTitle("Edit Question");
        //console.log(record);
        qForm.loadRecord(record);
    },
    saveQuestion: function(button, event, options)
    {
        var form = button.up('form').getForm();
        var qStore = Ext.StoreManager.lookup("QuestionStore");
        //alert("Saving0");
        debugger;
        if (form.isValid()) {
            var formData = form.getFieldValues();
            if (formData) {
                //console.log(formData);
                var id = formData.id;

                // Add new case
                if (id == '') {
                    // alert("New Question");
                    var model = Ext.create("QAApp.model.Question");
                    model.set(form.getValues());
                    qStore.add(model);
                }
                else
                {
                    //alert("Updating... Question");
                    var quesRecord = form.getRecord();
                    
                    quesRecord.set(formData);
                }

            }
        }
        else {
            Ext.Msg.alert('Error', "Please select a resource from Grid and add Visa Details.");
        }

    }
}
);

