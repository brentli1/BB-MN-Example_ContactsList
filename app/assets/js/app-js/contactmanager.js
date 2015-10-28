var ContactManager = new Marionette.Application({
    start: function() {
        Backbone.history.start();
    }
});

ContactManager.addRegions({
    main_region: '#main-region'
});
