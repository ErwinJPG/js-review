// For each row we want to make
let pNum = 0;
var isModalShown = false;

for (let i = 0; i < 2; i++) {
    // Make a new row with class "row" and append to "product-shelf"
    let mainDiv = document.getElementById("product-shelf")
    let newRow = createNewRow();

    mainDiv.appendChild(newRow);
 
    // For each column we want
    for (let j = 0; j < 3; j++) {
        // Make a new column with class "column" and append to row.
        // Make an image. Set its src = "img/"+products[pNum].filename; Append to column.
        // Make product name div with class "pName". Set innerHTML to products[pNum].name; Append to column.
        // Add an onclick event to column, to trigger a modal popup box to appear
        let newColumn = document.createElement("div");
        let newProduct = createNewProduct(  products[pNum].name, products[pNum].description, 
                                            products[pNum].image_url, products[pNum].price);
        
        newColumn.classList.add("column");

        newRow.appendChild(newColumn);
        newColumn.appendChild(newProduct);
        pNum += 1
    }
} 

let overlayDiv = document.getElementById("modal-overlay");
overlayDiv.addEventListener("click", hideModalPanel)

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

    mainDiv.addEventListener("click", function() {
        showModalPanel(name, description, image, cost);
    })

    mainDiv.appendChild(productImage);
    mainDiv.appendChild(productDetails);

    return mainDiv
}

function createProductImage(image) {
    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    let link  = document.createElement("a");

    imgDiv.classList.add("product-image");
    //img.setAttribute("src", "https://placehold.co/200x150");
    img.setAttribute("src", image);
    img.setAttribute("alt", "");
    img.setAttribute("title", "");
    img.setAttribute("draggable", "false");
    link.setAttribute("href", "#");

    link.appendChild(img);
    imgDiv.appendChild(link);
    
    return imgDiv;
}

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
    
    changePriceBreakdown(cost);

    return modalDiv;
}

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

function calculateCost(cost) {

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