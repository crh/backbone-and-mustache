'use strict';
play.Routers.ApplicationRouter = Backbone.Router.extend({

  routes: {
    '': 'home'
  },

  home: function() {
    console.log('home');
    play.Models.ninjaBook = new play.Models.Book({title: 'secrets of javascript ninja'});
    play.Views.appView = new play.Views.ApplicationView({model: play.Models.ninjaBook});
  }
});
