Ext.define('QAApp.store.QuestionStore', {
	extend : 'Ext.data.Store',
	requires : [ 'QAApp.model.Question' ],
	constructor : function(cfg) {
		var me = this;
		cfg = cfg || {};
		me.callParent([ Ext.apply({
			autoLoad : true,
			autoSync : true,
			storeId : 'QuestionStore',
			model : 'QAApp.model.Question',
			sorters : [ {
				property : 'id',
				direction : 'DESC'
			} ],
			proxy : {
				type : 'ajax',
				api : {

					read : 'QuestionServlet?method=read',
					create : 'QuestionServlet?method=create',
					update : 'QuestionServlet?method=update',
					destroy : 'QuestionServlet?method=delete'
				},

				reader : {
					type : 'json',
				    model: 'QAApp.model.Question',
					root : 'qaList'
				},
				writer: 
                {
                type: 'json',
                encode:false,
				writeAllFields: true,
				
                root: 'datas',
                model: 'QAApp.model.Question'
               // allowSingle: true,
                //nameProperty: 'id'
                 },
				listeners : {
					exception : function(proxy, response, operation) {
						Ext.MessageBox.show({
							title : 'An Error occurred on the Server Side',
							msg : operation.getError(),
							icon : Ext.MessageBox.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				}
			}
		}, cfg) ]);
	}
});