Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    controllers: [
        'main'
    ],
 
    stores: [
        'Personnel'
    ],
    views: [
        'main.MainModel'
    ],
    autoCreateViewport: false,
    name: 'CDanwendung',
    launch: function() {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;
        var htmlReporter = new jasmine.HtmlReporter();
        jasmineEnv.addReporter(htmlReporter);
        jasmineEnv.execute();
    }
});

