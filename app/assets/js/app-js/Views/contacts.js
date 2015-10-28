ContactManager.module('Contacts', function(Contacts, ContactManager, Backbone, Marionette, $, _) {
    Contacts.ContactItemView = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'contact--wrap',
        template: ContactManager.templates.contact
    });

    Contacts.ContactCollectionView = Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'contacts-container',
        childView: Contacts.ContactItemView
    });
});