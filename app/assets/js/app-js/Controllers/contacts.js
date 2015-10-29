// ContactManager Controller
ContactManager.ContactsController = Marionette.Object.extend({
    initialize: function() {
        this.contacts = ContactManager.contacts;
        this.router = new ContactManager.Router;
        this.startRouteEvents(this.router);
    },

    startRouteEvents: function(router) {
        router.on('route:home', function() {
            router.navigate('contacts', {
                trigger: true,
                replace: true
            });
        });

        router.on('route:showContacts', function() {
            var contactsView = new ContactManager.ContactsView({
                collection: ContactManager.contacts
            });
            var appLayout = new ContactManager.ContactsLayout();

            ContactManager.mainRegion.show(appLayout);
            appLayout.contacts.show(contactsView);
            appLayout.addNew.show(new ContactManager.AddNewButton());
        });

        router.on('route:newContact', function() {
            var newContactView = new ContactManager.ContactFormView({
                model: new ContactManager.ContactModel()
            });

            newContactView.on('form:submitted', function(attrs) {
                // attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
                // contacts.add(attrs);
                // this.router.navigate('contacts', true);
            });

            ContactManager.mainRegion.show(newContactView);
        });

        router.on('route:editContact', function(id) {
            var contact = ContactManager.contacts.get(id),
                editContactView;
            if(contact) {
                editContactView = new ContactManager.ContactFormView({
                    model: contact
                });
                ContactManager.mainRegion.show(editContactView);
            } else {
                router.navigate('contacts', true);
            }

        editContactView.on('form:submitted', function(attrs) {
                // contact.set(attrs);
                // this.router.navigate('contacts', true);
            });
        });
    }
});
