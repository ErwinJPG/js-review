var images = ["https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg",
            "https://cdn.pixabay.com/photo/2018/05/30/00/24/thunderstorm-3440450_1280.jpg",
            "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"]

let slideIndex = 1;
showSlides(slideIndex);

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

function addNewSlides() {
    let slideContainer = document.getElementById("slideContainer");
    let index = 0;
    images.forEach(element => {
        console.log("Added", element)
        index += 1;
        let newSlide = createNewSlide(element, index);
        slideContainer.appendChild(newSlide)
    });
}

function createNewSlide(image, index) {
    let slideMainDiv = createMainDivElement();
    let slideNumDiv = createNumDivElement(index);
    let slideImg = createImgElement(image, index);
    slideMainDiv.appendChild(slideNumDiv);
    slideMainDiv.appendChild(slideImg);

    return slideMainDiv;
}

function createMainDivElement() {
    let slideMainDiv = document.createElement("div");
    slideMainDiv.setAttribute("class", "mySlides fade");
    return slideMainDiv
}

function createNumDivElement(numbertext) {
    let slideNumDiv = document.createElement("div");
    slideNumDiv.classList.add("numbertext");
    slideNumDiv.innerHTML = `${numbertext}/${images.length}`; // index/(length of images array)
    return slideNumDiv;
}

function createImgElement(image, index) {
    let slideImg = document.createElement("img");
    slideImg.id = `carousel-image-${index}`;
    slideImg.src = image;
    return slideImg
}

addNewSlides();