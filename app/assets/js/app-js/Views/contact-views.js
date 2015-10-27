ContactManager.module('Contact', function(Contact, ContactManager, Backbone, Marionette, $, _) {
    Contact.ContactItemView = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'contact--wrap',
        template: ContactManager.templates.contact
    });

    Contact.ContactCollectionView = Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'contacts-container',
        childView: Contact.ContactItemView
    });
});