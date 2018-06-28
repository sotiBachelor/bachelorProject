Ext.define('QAApp.view.QuestionForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.questionform',
    bodyPadding: 10,
    frame: false,
    id: 'questionForm',
    title: 'Add New Question',
    items: [
    {
       xtype: 'fieldcontainer',
       anchor: '100%',
       layout: {
            align: 'stretch',
            type: 'hbox'
        },
        fieldLabel: 'Stream',
        items: [
        {
            xtype: 'radiogroup',
            width:450,
            padding: 0,
            // Arrange radio buttons into two columns, distributed vertically
            columns: 4,
            horizontal: true,
            items: [
                { boxLabel: 'History', name: 'stream', inputValue: 'History', padding: '5 0 0 0' },
                { boxLabel: 'Geography', name: 'stream', inputValue: 'Geography', padding: '5 0 0 0', checked: true},
                { boxLabel: 'Biology', name: 'stream', inputValue: 'Biology',padding: '5 0 0 0' },
                { boxLabel: 'Law', name: 'stream', inputValue: 'Law', padding: '5 0 0 0' }
            ]
        }] 
    }, 
    {
       xtype: 'fieldcontainer',
       anchor: '100%',
       layout: {
            align: 'stretch',
            type: 'hbox'
        },
        fieldLabel: 'Difficulty Level',
        items: [
        {
            xtype: 'radiogroup',
            width:450,
            // Arrange radio buttons into two columns, distributed vertically
            columns: 4,
            horizontal: true,
            items: [
                { boxLabel: 'Easy', name: 'level', inputValue: 'Easy', padding: '5 0 0 0', checked: true},
                { boxLabel: 'Intermediate', name: 'level', inputValue: 'Intermediate', padding: '5 0 0 0'},
                { boxLabel: 'Expert', name: 'level', inputValue: 'Expert',padding: '5 0 0 0'},
            ]
        }] 
    },
    {
        xtype: 'textfield',
        name: 'id',
        fieldLabel: 'Question ID',
        hidden: true
    },
    {
        xtype: 'textareafield',
        anchor: '100%',
        padding: '10 0 5 0',
        height: 60,
        name: 'question',
        fieldLabel: 'Question',
        allowBlank: false,
        // minLength ausklammern für Testfall
        //minLength: 5
    },
    {
        xtype: 'fieldcontainer',
        height: 50,
        layout: {
            align: 'stretch',
            type: 'hbox'
        },
        fieldLabel: 'Answer1',
        items: [
        {
            xtype: 'textareafield',
            flex: 5,
            name: 'answer1',
            padding: '5 0 5 0',
            fieldLabel: '',
            allowBlank: false
        
        },
        {
            xtype: 'radiofield',
            fieldLabel: '',
            boxLabel: '',
            name: 'correctanswer',
            padding: '0 0 0 10',
            inputValue: 'A',
            checked: true,
            flex: 1
        }
        ]
    },
    {
        xtype: 'fieldcontainer',
        height: 50,
        layout: {
            align: 'stretch',
            type: 'hbox'
        },
        fieldLabel: 'Answer2',
        items: [
        {
            xtype: 'textareafield',
            name: 'answer2',
            flex:5,
            padding: '5 0 5 0',
            fieldLabel: '',
            allowBlank: false
        },
        {
            xtype: 'radiofield',
            fieldLabel: '',
            boxLabel: '',
            name: 'correctanswer',
            padding: '0 0 0 10',
            inputValue: 'B',
            flex: 1
        }
        ]
    },
    {
        xtype: 'fieldcontainer',
        height: 55,
        layout: {
            align: 'stretch',
            type: 'hbox'
        },
        fieldLabel: 'Answer3',
        items: [
        {
            xtype: 'textareafield',
            padding: '5 0 5 0',
            name: 'answer3',
            flex:5,
            fieldLabel: '',
            allowBlank: false
        },
        {
            xtype: 'radiofield',
            fieldLabel: '',
            boxLabel: '',
            name: 'correctanswer',
            padding: '0 0 0 10',
            inputValue: 'C',
            flex: 1
            
        }
        ]
    },
    {
        xtype: 'fieldcontainer',
        height: 55,
        layout: {
            align: 'stretch',
            type: 'hbox'
        },
        fieldLabel: 'Answer4',
        items: [
        {
            xtype: 'textareafield',
            name: 'answer4',
            flex:5,
            fieldLabel: '',
            allowBlank: false
        },
        {
            xtype: 'radiofield',
            fieldLabel: '',
            boxLabel: '',
            name: 'correctanswer',
            padding: '0 0 0 10',
            inputValue: 'D',
            flex: 1
        }
        ]
    },
    ],
    buttons:[
        {
            xtype: 'button',
            text: 'Save',
            itemId: 'btnSaveQuestion'
        },
        {
            xtype: 'button',
            text: 'Clear',
            listeners: {
                click: function(button, event, options)
                {
                    var form = button.up('form').getForm();
                    form.reset(); 
                    button.up('form').setTitle("Add New Question");
                }
            }
        }
    ]
});


