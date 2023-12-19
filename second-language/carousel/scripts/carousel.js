let backgroundImage = document.getElementById("bg");
let cinebars = document.getElementById("cinebars").getElementsByTagName("div");

backgroundImage.addEventListener("click", hideBars);

// hides cinematic bars after n seconds
function hideBars() {
    let isBarHidden = cinebars[0].classList.contains("popout-bars");
    if (isBarHidden) {
        for (let i = 0; i < cinebars.length; i++) {
            cinebars[i].classList.remove("popout-bars");
        }
    } else {
        for (let i = 0; i < cinebars.length; i++) {
            cinebars[i].classList.add("popout-bars");
        }  
    }
}