Ext.define('QAApp.view.MainPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.QuizMainPanel',
	requires : [ 'QAApp.view.QuestionGrid', 'QAApp.view.QuestionForm' ],
        id: "Mainpanel",
	activeTab : 1,
	layout : {
		type : 'vbox',
		align : 'center'

	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'questionform'
			},

			{
				xtype : 'questiongrid',
				width : '98%',
				autoScroll : true,
				height : 200
			}

			]
		});

		me.callParent(arguments);
	}

});