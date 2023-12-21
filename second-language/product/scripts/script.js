// For each row we want to make
let pNum = 0;
for (let i = 0; i < 2; i++) {
    // Make a new row with class "row" and append to "main-div"
    let mainDiv = document.getElementById("main-div")
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
        pNum += 1
        
        newColumn.classList.add("column");

        newRow.appendChild(newColumn);
        newColumn.appendChild(newProduct);
    }
} 

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