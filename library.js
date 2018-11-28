let Library = function(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

let Tracks = function(){
  this.title = '';
  this.rating = 1;
  this.duration = 0;
}

let Playlist = function(playlistName){
  this.playlistName = playlistName;
  this.tracklist = [];
}

Library.prototype.addToLibrary = function(playlist){
  this.playlists.unshift(playlist);
}

Tracks.prototype.addTrack = function(title,rating,duration) {
  this.title = title;
  this.rating = rating;
  this.duration = duration;
}

Playlist.prototype.addToPlayList = function(tracks){
  this.tracklist.unshift(tracks);
}

Object.defineProperty(Playlist.prototype,"overallRating",
  {
    get: function() {
      let avg = 0;
      for(let tracks of this.tracklist){
        avg += tracks.rating;
      }
      avg = avg / this.tracklist.length;
      return avg;
    }
  });
Object.defineProperty(Playlist.prototype,"totalDuration",
  {
    get: function() {
      let total = 0;
      for(let tracks of this.tracklist){
        total += tracks.duration;
      }
      return total;
    }
  });


//////////////////////////////////////////////////////////////////////////
let trackTest = new Tracks();
let trackTest2 = new Tracks();
trackTest.addTrack("New Song", 5, 120);
trackTest2.addTrack("New Song2", 2, 80);
console.log("Tracks***********************************************");
console.log(trackTest);
console.log(trackTest2);

let playlistTest = new Playlist("New playlist");
playlistTest.addToPlayList(trackTest);
playlistTest.addToPlayList(trackTest2);
console.log("\nPlaylists***********************************************");
console.log(`Average rating: ${playlistTest.overallRating}`);
console.log(`Total duration: ${playlistTest.totalDuration}`);

console.log("\nLibrary*************************************************");
let libraryTest = new Library("Fun Library", "Joe");
libraryTest.addToLibrary(playlistTest);
console.log(libraryTest);



