// ContactManager Controller
ContactManager.ContactsController = Marionette.Object.extend({
    initialize: function() {
        this.contacts = ContactManager.contacts;
        this.router = ContactManager.router;
    },

    this.router.on('route:home', function() {
        this.router.navigate('contacts', {
            trigger: true,
            replace: true
        });
    });

    this.router.on('route:showContacts', function() {
        var contactsView = new ContactManager.ContactsView({
            collection: this.contacts
        });

        ContactManager.getRegion('main_region').show(contactsView);
    });

    this.router.on('route:newContact', function() {
        var newContactView = new ContactManager.ContactFormView({
            model: new ContactManager.ContactModel()
        });

        newContactView.on('form:submitted', function(attrs) {
            // attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
            // contacts.add(attrs);
            // this.router.navigate('contacts', true);
        });

        ContactManager.getRegion('main_region').show(newContactView);
    });

    this.router.on('route:editContact', function(id) {
        var contact = this.contacts.get(id),
            editContactView;
        if(contact) {
            editContactView = new ContactManager.ContactFormView({
                model: contact
            });
            ContactManager.getRegion('main_region').show(editContactView);
        } else {
            this.router.navigate('contacts', true);
        }

    editContactView.on('form:submitted', function(attrs) {
            // contact.set(attrs);
            // this.router.navigate('contacts', true);
        });
    });
});
