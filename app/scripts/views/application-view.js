'use strict';
/***/
play.Views.ApplicationView = Backbone.View.extend({

  initialize: function() {
    console.log('init app view');

    this.template = play.helpers.tpl.get('book');
    var html = Mustache.to_html(this.template, this.model.toJSON());
    this.$el.html(html);
    $('.container').html(this.$el);
  }
});
