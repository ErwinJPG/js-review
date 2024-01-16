var isModalShown = false;

let overlayDiv = document.getElementById("modal-overlay");
overlayDiv.addEventListener("click", hideModalPanel);

// BEGIN MODAL PANEL
function showModalPanel(name, description, image, cost) {
    let modalDiv = document.getElementById("checkout-drawer");
    let productImage = document.getElementById("selected-product-image");
    let productTitle = document.getElementById("selected-product-title");
    let productDescription = document.getElementById("selected-product-description");
    let productPrice = document.getElementById("selected-product-price");
    let mainDiv = document.getElementById("main-div").children;

    isModalShown = true;
    overlayDiv.classList.remove("hidden")

    modalDiv.classList.remove("hidden");
    modalDiv.classList.add("open-drawer");

    productImage.setAttribute("src", image);
    productTitle.innerHTML = name;
    productDescription.innerHTML = description;
    productPrice.innerHTML = `$${cost}`;

    for (let i = 0; i < mainDiv.length; i++) {
        mainDiv[i].classList.add("blur");
    }
    
    changePriceBreakdown(parseFloat(cost));

    return modalDiv;
}

// Calculates and displays price breakdown
function changePriceBreakdown(cost) {
    let priceDiv = document.getElementsByClassName("price-breakdown")[0];
    let priceDivChild = priceDiv.children;

    let tax = cost * 0.05;
    let total = cost + tax + 15;

    priceDivChild[0].innerHTML = `Item price: $${cost}`;
    priceDivChild[1].innerHTML = `Shipping: $15`;
    priceDivChild[2].innerHTML = `Tax: $${tax.toFixed(2)}`;
    priceDivChild[3].innerHTML = `Total: $${total.toFixed(2)}`;
}

function hideModalPanel() {
    let mainDiv = document.getElementById("main-div").children;
    let modalDiv = document.getElementById("checkout-drawer");
    modalDiv.classList.add("hidden");
    modalDiv.classList.remove("open-drawer");
    overlayDiv.classList.add("hidden")

    isModalShown = false;

    for (let i = 0; i < mainDiv.length; i++) {
        mainDiv[i].classList.remove("blur");
    }
}

// Slide purchase
function handleSlider() {
    let sliderLabel = document.getElementById("buy-slider-label");
    let sliderElement = document.getElementById("buy-slider");
    let decay = 0;

    if (sliderElement.value == 100) {
        sliderElement.classList.add("pop-out");
        window.setTimeout(() => {
            sliderLabel.remove();
            sliderElement.remove();
            createBought();
        }, 650)
    } else {
        let interval = window.setInterval(() => {
            decay += 0.05;
            sliderElement.value -= decay;
            
            if (sliderElement.value == 0) {
                clearInterval(interval);
            }
        }, 5);
    }
    
}

function createBought() {
    let buyContainer = document.getElementsByClassName("buy-slider-container")[0];
    let p = document.createElement("h2");
    p.innerHTML = "Order created. Thank you!";
    p.classList.add("center");

    buyContainer.appendChild(p);
}

function preventSubmitOnEmpty() {
    let inputDiv = document.getElementById("search-input");
    
    if (inputDiv.value == null || inputDiv.value == "") {
        return false;
    } 
}

// https://stackoverflow.com/questions/22753052/remove-url-parameters-without-refreshing-page
function clearQuery() {
    window.location.href =  window.location.href.split("?")[0];
}