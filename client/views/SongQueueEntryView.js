// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  template:_.template('<div class="artist" data-id="<%- artist %>"> \
                          <div class="url"><%- url %></div> \
                          <div class="title"><%- title %></div> \
                        </div>'),
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});
