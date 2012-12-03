'use strict';
/***/
window.play = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    console.log('Hello from Backbone!');

    /*
    preload a template with the name book stored in
    `scripts/templates/book.html`
    */
    play.helpers.tpl.loadTemplates(['book'], function() {
      play.router = new play.Routers.ApplicationRouter();
      Backbone.history.start();
    });
  }
};

$(document).ready(function() {
  play.init();
});
