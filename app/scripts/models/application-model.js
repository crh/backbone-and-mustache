'use strict';
/***/
play.Models.Book = Backbone.Model.extend({
  defaults: {
    title: 'no title'
  },

  initialize: function(options) {
    console.log('create books', options);
  }

});
