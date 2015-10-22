// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
    defaults: {
      artist: '',
      url:'',
      title:'',
      PlayCount:0
    },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('PlayCount',this.get('PlayCount')+1);
    console.log(this.get('PlayCount'));
  },
  enqueue: function() {
    this.trigger('enqueue',this);
  },
    dequeue: function() {
    this.trigger('dequeue',this);
  },
    ended: function() {
    this.trigger('ended',this);
  }

});
