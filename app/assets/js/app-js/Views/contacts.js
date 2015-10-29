// Contact manager Views

ContactManager.ContactView = Marionette.ItemView.extend({
    tagName: 'li',
    className: 'contact--wrap',
    template: ContactManager.templates.contact,
    ui: {
        'delete' : '.js-delete-contact'
    },
    events: {
        'click @ui.delete' : 'removeContact'
    },
    removeContact: function(e) {
        e.preventDefault();
        this.model.collection.remove(this.model);
    }
});

ContactManager.ContactsView = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'contacts-container',
    childView: ContactManager.ContactView
});
