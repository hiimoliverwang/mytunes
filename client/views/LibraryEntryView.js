// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({
  initiate: function(){
    this.model.on('all',this.render,this);
    
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>Play Count: <%= PlayCount %></td>'),


  events: {
    'click': function() {
        this.model.enqueue();
    },

  },

  render: function(){
    this.trigger('pleaserenderMATHAFUCKA',this)
    console.log('triggering mathafuka')
    return this.$el.html(this.template(this.model.attributes));
  }

});
