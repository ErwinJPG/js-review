var images = [
    "https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg"
]

let slideIndex = 1;
addNewSlides()

// Iterates through images array and appends respective slides
// 
function addNewSlides() {
    let index = 0;
    let slidesDiv = document.getElementById("slides");
    let dotsDiv = document.getElementById("dots");
    images.forEach((image) => {
        slidesDiv.before(createNewSlide(image, index + 1));
        dotsDiv.appendChild(createNewDot(index + 1));
        index += 1;
    })
    showSlides(slideIndex);
}

function createNewSlide(image_url, index) {
    let mainDiv = document.createElement("div");
    let numberDiv = document.createElement("div");
    let img = document.createElement("img");
    let textDiv = document.createElement("div");

    mainDiv.appendChild(numberDiv);
    mainDiv.appendChild(img);
    mainDiv.appendChild(textDiv);

    mainDiv.classList.add("mySlides");
    mainDiv.classList.add("fade");
    numberDiv.classList.add("numbertext");
    numberDiv.innerHTML = `${index}/${images.length}`;
    img.src = image_url;
    img.style.width = "100%";
    textDiv.classList.add("text");
    textDiv.innerHTML = image_url;

    return mainDiv;
}

function createNewDot(index) {
    let spanElement = document.createElement("span");
    spanElement.classList.add("dot");
    spanElement.setAttribute("onclick", `currentSlide(${index})`)

    return spanElement;
}

// CONTROLS

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}