ContactManager.module('Models.Contact', function(Contact, ContactManager, Backbone, Marionette, $, _) {
    'use strict';

    Contact.Model = Backbone.Model.extend({
        defaults: {
            name: null,
            email: null,
            tel: null,
            avatar: null
        }
    });

    Contact.Collection = Backbone.Collection.extend({
        model: Contact.Model
    });
});
