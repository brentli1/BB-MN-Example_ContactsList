ContactManager.ContactModel = Backbone.Model.extend({
    defaults: {
        name: null,
        email: null,
        tel: null,
        avatar: null
    }
});

ContactManager.ContactsCollection = Backbone.Collection.extend({
    model: ContactManager.ContactModel
});

var contacts = [
  {
    id: 1,
    name : 'Boba Fett',
    tel: '555-554-5555',
    email: 'boba@codebrent.com',
    avatar: 'boba.jpg'
  },
  {
    id: 2,
    name : 'Darth Maul',
    tel: '555-444-5555',
    email: 'maul@codebrent.com',
    avatar: 'maul.jpg'
  },
  {
    id: 3,
    name : 'Darth Vader',
    tel: '555-444-5555',
    email: 'vader@codebrent.us',
    avatar: 'vader.jpg'
  },
  {
    id: 4,
    name : 'Biggs Darklighter',
    tel: '555-444-5555',
    email: 'biggs@codebrent.com',
    avatar: 'biggs.jpg'
  },
  {
    id: 5,
    name : 'Chewbacca Wookie',
    tel: '555-444-5555',
    email: 'chewie@codebrent.com',
    avatar: 'chewie.jpg'
  },
  {
    id: 6,
    name : 'Han Solo',
    tel: '555-444-5555',
    email: 'solo@codebrent.com',
    avatar: 'solo.jpg'
  },
  {
    id: 7,
    name : 'Count Dooku',
    tel: '555-444-5555',
    email: 'dooku@codebrent.com',
    avatar: 'dooku.jpg'
  }
];

ContactManager.contacts = new ContactManager.ContactsCollection(contacts);
