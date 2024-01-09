<?php require_once 'dbaccess.php'; ?>
<!DOCTYPE php?>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Product</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles/style.css">
    </head>
    <body>
        <div id="main-div" class="content">
            <div class="top-panel">
                <p class="top-header">MAWP.SHOP</p>
            </div>
            <div id="product-shelf" class="product-shelf">
                <?php
                    $products = getProducts();

                    // 4 no-break-spaces used for spacing below
                    $tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

                    // display each product's info on a separate line
                    //foreach ($products as $product){
                    //        echo "<div style='height:20px;overflow:hidden;font-size:15px;line-height:20px;margin:4px;'>";
                    //            echo "pid: "   . $product['pid']   . $tab;
                    //            echo "pname: " . $product['pid']   . $tab;
                    //            echo "model: " . $product['model'] . $tab;
                    //            echo "price: " . $product['price'] . $tab;
                    //            echo "img: "   . $product['img']   . $tab;
                    //            echo "descr: " . $product['descr'] . "<br />";
                    //        echo "</div>";
                    //};
                    for ($i = 0; $i < 2; $i++) {
                        echo "<div class='row'>";
                        for ($j = 0; $j < 3; $j++) {
                            echo "<div class='column'>";
                            
                        }
                        echo "</div>";
                    }
                    
                ?>
            </div>

            <div class="footer" >
                <p>© Erwin 2023</p>
            </div>
        </div>
        <div id="modal-overlay" class="modal-overlay hidden"></div>
        <div id="checkout-drawer" class="checkout-drawer hidden">
            <div class="checkout-layout">
                <img class="exit-button" src="images/cross.svg" alt="Exit" onclick="hideModalPanel()"></img>
                <h1>CHECKOUT</h1>
                <img id="selected-product-image" src="https://placehold.co/100x100" class="selected-product-image" title alt>
                <div id="selected-product-details" class="selected-product-details">
                    <h3 id="selected-product-title" class="selected-product-title">EXAMPLE PRODUCT</h3>
                    <p id="selected-product-description" class="selected-product-description">EXAMPLE DESCRIPTION</p>
                    <p id="selected-product-price" class="selected-product-price">$999</p>
                </div>
                <div class="price-breakdown">
                    <h3>Item price: $999</h3>
                    <p>Shipping: $0</p>
                    <p>Tax: $0</p>
                    <h2>Total: $999</h2>
                </div>
                <div class="buy-slider-container">
                    <label id="buy-slider-label">
                        <input id="buy-slider" type="range" class="buy-slider" value="0" max="100" step="0.05" onchange="handleSlider()">
                        Slide to order
                    </label>
                </div>
            </div>
        </div>
    </body>
</html>