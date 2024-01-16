<?php require_once 'dbaccess.php'; ?>
<!DOCTYPE html>
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
                <form id="search-box" action="index.php" method="get" style="padding: 6px" onsubmit="return preventSubmitOnEmpty()">
                    <label for="search-box">Search</label>
                    <input id="search-input" type="text" name="search" style="height: 2rem">
                    <button id="search-button" class="submit-button" type="submit">Submit</button>
                </form>
                <?php
                    $pNum = 0;
                    $tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

                    // Ensure name parameter is set before accessing it
                    if (isset($_GET['search'])) { 
                        $products = searchProducts($_GET['search']); 
                        htmlspecialchars($_GET["search"]);
                        $db_size = sizeof($products);
                        
                        echo    "<p style='color: #70757a; padding: 6px; width: fit-content'> 
                                    Searching for {$_GET['search']}. {$db_size} results
                                    <img class='clear-query-button' src='images/cross.svg' alt='Exit' onclick='clearQuery()'></img> 
                                </p>";
                    }
                    else { 
                        $products = getProducts();
                        $db_size = sizeof($products);
                    }

                    for ($i = 0;; $i++) {
                        if ($db_size <= $pNum) break;
                        echo "<div class='row'>";
                        for ($j = 0; $j < 3; $j++) {
                            if ($db_size <= $pNum) break;
                            echo "<div class='column'>";
                                echo "<div id='product-{$pNum}' class='product-layout'>";
                                    echo "<div class='product-image'>
                                            <a href='#'>
                                                <img src='{$products[$pNum]['img']}' alt=' title=' draggable='false'>
                                            </a>
                                        </div>";
                                    echo "<div class='product-details'>
                                            <p class='product-name'>{$products[$pNum]['pname']}</p>
                                            <p class='product-description'>{$products[$pNum]['descr']}</p>
                                            <p class='product-cost'>\${$products[$pNum]["price"]}</p>
                                        </div>";
                                echo "</div>";
                            echo "</div>";
                            echo "<script>",
                                    "document.getElementById('product-{$pNum}').addEventListener('click', function() {",
                                    "    showModalPanel('{$products[$pNum]['pname']}', '{$products[$pNum]['descr']}', '{$products[$pNum]['img']}', '{$products[$pNum]["price"]}')",
                                    "});",
                                "</script>";
                                
                            $pNum ++;
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
        <script type="text/javascript" src="scripts/script.js"></script>
    </body>
</html>