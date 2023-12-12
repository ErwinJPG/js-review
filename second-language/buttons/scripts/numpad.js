var soundPlayer = new Audio();

function play_dial(num) {
    // https://stackoverflow.com/questions/25157513/javascript-pitch-shift-with-time-stretch
    // https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
    // dialing "3-3-2-3-9-3" should sound like funky town
    soundPlayer.src = "sounds/piano.mp3"; // <-- Find audio
    soundPlayer.mozPreservesPitch = false;
    soundPlayer.playbackRate = 0.5;
    soundPlayer.play();
    funk();
}

function funk() {

}