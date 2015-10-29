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

ContactManager.ContactsLayout = Marionette.LayoutView.extend({
    template: ContactManager.templates.contactslayout,
    regions: {
        contacts: '#contacts',
        addNew  : '#add-new'
    }
});

ContactManager.AddNewButton = Marionette.ItemView.extend({
    template: _.template('<a href="#contacts/new" class="btn add-btn">Add Contact</a>')
});

ContactManager.ContactFormView = Marionette.ItemView.extend({
    template: ContactManager.templates.contactform
});
