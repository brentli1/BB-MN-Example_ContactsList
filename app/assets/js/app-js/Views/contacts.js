// Contact manager Views

ContactManager.ContactView = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'contact--wrap',
    template: ContactManager.templates.contact
});

ContactManager.ContactsView = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'contacts-container',
    childView: ContactManager.ContactView
});
