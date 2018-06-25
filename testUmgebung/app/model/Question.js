Ext.define('QAApp.model.Question', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'question',
            type: 'string'
        },
        {
            name: 'answer1',
            type: 'string'
        },
        {
            name: 'answer2',
            type: 'string'
        },
        {
            name: 'answer3',
            type: 'string'
        },
        {
            name: 'answer4',
            type: 'string'
        },
        {
            name: 'correctanswer',
            type: 'string'
        },
        {
            name: 'stream',
            type: 'string'
        },
        {
            name: 'level',
            type: 'string'
        },
        {
            name: 'submittedBy',
            type: 'string'
        }
    ]
});