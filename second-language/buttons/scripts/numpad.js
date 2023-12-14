var soundPlayer = new Audio();
var hits = 0;

var low_tone = [697,770,852,941];
var high_tone = [1209,1336,1477,1633];

function encode_dtmf() {
    // https://www.giangrandi.org/electronics/radio/dtmf.shtml
    // https://www.mathworks.com/matlabcentral/fileexchange/91500-simple-dtmf-encoder-decoder
    let signal = [];
}

function play_dial(num) {
    // https://stackoverflow.com/questions/25157513/javascript-pitch-shift-with-time-stretch
    // https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
    // dialing "3-3-2-3-9-3" should sound like funky town
    let cmd = `sounds/dialpad/0.mp3`;

    soundPlayer.src = cmd; // <-- Find audio
    soundPlayer.load(cmd)
    soundPlayer.preservesPitch = false;
    soundPlayer.playbackRate = num;
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