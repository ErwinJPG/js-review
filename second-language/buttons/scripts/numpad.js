var soundPlayer = new Audio();
var hits = 0;

function play_dial(num) {
    // https://stackoverflow.com/questions/25157513/javascript-pitch-shift-with-time-stretch
    // https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
    // dialing "3-3-2-3-9-3" should sound like funky town
    if (num < 0 || num > 9) {return};
    let cmd = `sounds/dialpad/${num}.mp3`;

    soundPlayer.src = cmd; // <-- Find audio
    soundPlayer.load(cmd)
    soundPlayer.preservesPitch = false;
    soundPlayer.playbackRate = 1;
    soundPlayer.play();
    funk(num);
}

function funk(num) {
    let funky_tones = [5,5,7,5,4,4,5,0,8,5];
    if (num == funky_tones[hits]) {
        hits += 1;
    } else {
        hits = 0;
    };
    console.log(hits);
}