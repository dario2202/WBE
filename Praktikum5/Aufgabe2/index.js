function isPlayingOut(){
    const Player = require('./lib/jasmine_examples/Player');
    const Song = require('./lib/jasmine_examples/Song');

    const player = new Player();
    const song = new Song('A great song');

    player.play(song);

    if (player.isPlaying == true) {
        return `Im moment hoeren Sie: ${player.currentlyPlayingSong.title}`
    }
}

console.log(isPlayingOut())