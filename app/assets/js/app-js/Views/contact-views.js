ContactManager.module('ContactMod', function(ContactMod, ContactManager, Backbone, Marionette, $, _) {
    ContactMod.ContactItemView = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'contact--wrap',
        template: ContactManager.templates.contact,

        ui: {
            'edit'   :  '.js-edit-contact',
            'delete' :  '.js-delete-contact'
        },

        triggers: {
            'click @ui.edit'  :  'showEditPage'
        },

        onShowEditPage: function() {

        }
    });

    ContactMod.ContactCollectionView = Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'contacts-container',
        childView: ContactMod.ContactItemView
    });
});