// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('change', this.render(), this);
  },
  

   render: function() {
      this.collection.forEach(this.renderSongs, this);
   },

   renderSongs: function(song){
    var songQueueEntryView = new SongQueueEntryView({model:song});
    this.$el.append(songQueueEntryView.render());
   }

});
