var soundPlayer = new Audio();
var hits = 0;
var loaded = false;
var rainbowed = false;
for (let i = 0; i < 10; i++) {
    soundPlayer.load(`sounds/dialpad/${i}.mp3`);
}
window.addEventListener("load", function(){
    loaded = true;
})

function play_dial(num) {
    // https://stackoverflow.com/questions/25157513/javascript-pitch-shift-with-time-stretch
    // https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
    // dialing "3-3-2-3-9-3" should sound like funky town
    // Should preload audio at DOM loading
    if (!loaded) {return};
    if (num < 0 || num > 9) { return };
    let file = `sounds/dialpad/${num}.mp3`;

    soundPlayer.src = file; // <-- Find audio
    soundPlayer.volume = 0.1;
    soundPlayer.preservesPitch = false;
    soundPlayer.playbackRate = 1;
    soundPlayer.play();
    funk(num);
}

function funk(num) {
    // https://www.w3schools.com/howto/howto_css_disable_text_selection.asp
    let funky_tones = [5, 5, 7, 5, 4, 4, 5, 0, 8, 5];
    if (num == funky_tones[hits] && !rainbowed) {
        hits += 1;
    } else {
        hits = 0;
    };

    if (hits >= funky_tones.length) {
        rainbow_mode();
        rainbowed = true;
    }
}

function rainbow_mode() {
    // Appends "funk" at end of class name to start animation
    // How to make effect persist after tab change?
    console.log("!!");
    let buttons = document.getElementById("keyboard").getElementsByTagName("li");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className + " funk";
    }
}