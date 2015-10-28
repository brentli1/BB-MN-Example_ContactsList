var ContactManager = new Marionette.Application({
    start: function(data) {

        Backbone.history.start();

        // Move this stuff to a function that gets triggered via router
        var contacts = new ContactManager.Models.Contact.Collection(data.contacts),
            contactsView = new ContactManager.ContactMod.ContactCollectionView({collection: contacts});
        this.getRegion('main_region').show(contactsView);
    }

});

ContactManager.addRegions({
    main_region: '#main-region'
});
