var soundPlayer = new Audio();
var hits = 0;
var rainbowed = false;

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
    // DISABLE TEXT HIGHLIGHTING FOR BUTTONS
    // https://www.w3schools.com/howto/howto_css_disable_text_selection.asp
    let funky_tones = [5,5,7,5,4,4,5,0,8,5];
    if (num == funky_tones[hits] && !rainbowed) {
        hits += 1;
    } else {
        hits = 0;
    };

    if (hits >= funky_tones.length) {
        rainbow_mode();
        rainbowed = true;
    }
    // https://stackoverflow.com/questions/7171483/simple-way-to-get-element-by-id-within-a-div-tag
    // https://stackoverflow.com/questions/4019894/get-all-li-elements-in-array
}

function rainbow_mode() {
    console.log("!!");
    let buttons = document.getElementById("keyboard").getElementsByTagName("li");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className + " funk";
    }
}