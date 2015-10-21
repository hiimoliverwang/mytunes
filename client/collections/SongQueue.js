// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({



  initialize: function() {
    this.on('add', this.doIPlay ,this);
    this.on('ended', this.deQueue,this);
    this.on('dequeue', this.deQueue,this);
  },

  deQueue: function() {
    this.remove(this.at(0));
    if(this.length > 0){
      this.playFirst();
    }
  },

  songQueue: function(){

  },

  doIPlay: function(){
    if (this.length === 1){
      this.playFirst();
    }
  },

  playFirst: function(){
      this.at(0).play();

  }


});