Ext.define('QAApp.view.QuestionGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.questiongrid',
    padding: '10,0,0,10',
    title: 'Question and Answer',
    store: 'QuestionStore',
    itemId: 'questionGrid',
    id: 'questionGrid',
    autoScroll:true,
    initComponent: function() {
        var me = this;
        me.callParent(arguments);
        me.addEvents('deleteQuestion');
     },
    listeners: {
        afterrender: function() {
            //alert("afterrender");
            var qStore = Ext.StoreManager.lookup("QuestionStore");
            
            qStore.on('load', function(){
                var grid = Ext.getCmp("questionGrid");
                grid.setTitle("Question and Answer -> Total Questions : " + qStore.data.length);
            });
            
            qStore.on('update',function() {
                    qStore.sort();
                    var grid = Ext.getCmp("questionGrid");
                    grid.setTitle("Question and Answer -> Total Questions : " + qStore.data.length);
                    
            });
            
             qStore.on('remove',function() {
                    qStore.sort();
                    var grid = Ext.getCmp("questionGrid");
                    grid.setTitle("Question and Answer -> Total Questions : " + qStore.data.length);
                    
            });
            
            qStore.load();
        }
    },
    columns: [
    {
        xtype: 'gridcolumn',
        dataIndex: 'id',
        text: 'Id',
        width: 30
    },
    {
        xtype: 'gridcolumn',
        dataIndex: 'question',
        text: 'Question',
        renderer: columnWrap,
        flex:2
    },
    {
        xtype: 'gridcolumn',
        dataIndex: 'answer1',
        text: 'Answer1',
        renderer: columnWrap,
        flex:1
    },
    {
        xtype: 'gridcolumn',
        dataIndex: 'answer2',
        text: 'Answer2',
        renderer: columnWrap,
        flex:1
    },
    {
        xtype: 'gridcolumn',
        dataIndex: 'answer3',
        text: 'Answer3',
        renderer: columnWrap,
        flex:1
    },
    {
        xtype: 'gridcolumn',
        dataIndex: 'answer4',
        text: 'Answer4',
        flex:1
    },
    {
        xtype: 'gridcolumn',
        dataIndex: 'correctanswer',
        text: 'Answer',
        width:50
    },
    {
        xtype: 'gridcolumn',
        dataIndex: 'stream',
        text: 'Stream',
        width:70
    },
    {
        xtype: 'gridcolumn',
        dataIndex: 'level',
        text: 'Level',
        width:70
    },
    {
        xtype: 'actioncolumn',
        width:40,
        tdCls:'delete',
        id: "deleteQuestionActionColumn",
        items: [{
                icon: 'images/delete.png',  // Use a URL in the icon config
                tooltip: 'Delete',
                xtype: "image",
                id :"deleteQuestionIcon",
                handler: function(grid, rowIndex, colIndex) {
                var dataGrid = this.up('grid');
                Ext.Msg.show({
                    title: 'Delete Confirmation',
                    msg: 'Are you sure you want to delete this Question?',
                    width: 300,
                    buttons: Ext.Msg.OKCANCEL,
                    icon: Ext.window.MessageBox.INFO,
                    fn: function(buttonId, text, eOpts)
                    {
                        if (buttonId == "ok"){
                           var rec = dataGrid.getStore().getAt(rowIndex);
                           dataGrid.fireEvent('deleteQuestion', rec);
                           
                            /*grid.getStore().load(function(records, operation, success) {
                                  var grid = Ext.getCmp("questionGrid");
                                grid.setTitle("Question and Answer -> Total Questions : " + records.length);

                            });*/  
                        }
                    }
                });
                    

            }
            }]
    }
    ]
});

function columnWrap(val){
    return '<div style="white-space:normal !important;">'+ val +'</div>';
}


