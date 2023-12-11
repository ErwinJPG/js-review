numpad_ref = document.getElementById("keyboard");
numpad_ref.addEventListener("click", play_dial);

var soundPlayer = new Audio();

function play_dial() {
    soundPlayer.src = "sounds/piano.mp3"; // <-- Find audio
    soundPlayer.mozPreservesPitch = false;
    soundPlayer.playbackRate = 0.5;
    soundPlayer.play();
}