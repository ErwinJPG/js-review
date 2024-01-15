let pNum = 0;
var isModalShown = false;

let overlayDiv = document.getElementById("modal-overlay");
overlayDiv.addEventListener("click", hideModalPanel);

//let mainDiv = document.getElementById("product")
//mainDiv.addEventListener("click", function() {
//    showModalPanel(name, description, image, cost);
//})

function createNewRow() {
    let newRow = document.createElement("div");
    newRow.classList.add("row");


    return newRow;
}
function createNewProduct(name, description, image, cost) {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", `product-${pNum}`);
    mainDiv.classList.add("product-layout");

    let productImage = createProductImage(image);
    let productDetails = createProductDetails(name, description, cost);

    // Displays modal panel
    

    mainDiv.appendChild(productImage);
    mainDiv.appendChild(productDetails);

    return mainDiv;
}

// Creates product thumbnail
function createProductImage(image) {
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    let link  = document.createElement("a");

    imgDiv.classList.add("product-image");
    img.setAttribute("src", image);
    img.setAttribute("alt", "");
    img.setAttribute("title", "");
    img.setAttribute("draggable", "false");
    link.setAttribute("href", "#");

    link.appendChild(img);
    imgDiv.appendChild(link);
    
    return imgDiv;
}

// Creates product details underneath product image
function createProductDetails(name, description, cost) {
    let detailsDiv = document.createElement("div");
    let productName = document.createElement("p");
    let productDescription = document.createElement("p");
    let productPrice = document.createElement("p");

    detailsDiv.classList.add("product-details");
    productName.classList.add("product-name");
    productName.innerHTML = name;
    productDescription.classList.add("product-description");
    productDescription.innerHTML = description;
    productPrice.classList.add("product-cost");
    productPrice.innerHTML = `$${cost}`;
    
    detailsDiv.appendChild(productName);
    detailsDiv.appendChild(productDescription);
    detailsDiv.appendChild(productPrice);

    return detailsDiv;
}

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