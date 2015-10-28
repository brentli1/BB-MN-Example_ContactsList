ContactManager.module('Contacts', function(Contacts, ContactManager, Backbone, Marionette, $, _) {

    Contacts.ContactsController = Marionette.Controller.extend({
        initialize: function() {
            this.contacts = ContactManager.Entities.Contacts.contactsColl;
        },

        navHome: function() {
            ContactManager.Router.contactRouter.navigate('contacts', {trigger: true});
        },

        showContacts: function() {
            var contactsView = new ContactManager.Contacts.ContactCollectionView({collection: this.contacts});
            ContactManager.getRegion('main_region').show(contactsView);
        },

        editContact: function(id) {
            var contact = this.contacts.get(id);
        }

    });

    Contacts.contactsController = new Contacts.ContactsController();

    Contacts.ContactsRouter = new Marionette.AppRouter({
        controller : Contacts.contactsController,
        appRoutes : {
            ''                  : 'navHome',
            'contacts'          : 'showContacts',
            'contacts/edit/:id' : 'editContact'
        }
    });

});