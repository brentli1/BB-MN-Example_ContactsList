var ContactManager = new Marionette.Application({
    start: function() {
        router = new ContactManager.Router();
        ContactManager.contactsController = new ContactManager.ContactsController();

        Backbone.history.start();
    }
});

// ContactManager Router
ContactManager.Router = Backbone.Router.extend({
    routes: {
        ''                      : 'home',
        'contacts'              : 'showContacts',
        'contacts/new'          : 'newContact',
        'contacts/edit/:id'     : 'editContact'
      }
});

// Add main region
ContactManager.addRegions({
    main_region: '#main-region'
});
