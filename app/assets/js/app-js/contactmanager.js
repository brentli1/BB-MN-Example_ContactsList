var ContactManager = new Marionette.Application({
    onStart: function() {
        Backbone.history.start();
    }
});

// ContactManager Router
ContactManager.router = new Backbone.Router({
    routes: {
        ''                  : 'home',
        'contacts'          : 'showContacts',
        'contacts/new'      : 'newContact',
        'contacts/edit/:id' : 'editContact'
      }
});

// Add main region
ContactManager.addRegions({
    main_region: '#main-region'
});
