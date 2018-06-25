Ext.define('QAApp.view.Viewport', {
    extend: 'Ext.panel.Panel',
    requires:[
        'QAApp.view.MainPanel'
    ],
    padding: 10,
    title: 'Bachelorthesis Testumgebung',
    renderTo: 'mainbody',
    items: [ 
    {
        id:'contentContainer',
        layout: 'fit',
        xtype: 'tabpanel',
        items: [
        {
            xtype:'QuizMainPanel',
            title: 'Submit a question'
        }]

    }]


});