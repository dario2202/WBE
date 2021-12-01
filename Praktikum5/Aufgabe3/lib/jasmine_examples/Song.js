function Song(title) { // Ergaenzung des Konstruktors wie in Aufgabe 2 verlangt
  this.title = title
}

Song.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};

module.exports = Song;
