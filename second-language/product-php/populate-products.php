<?php

/*
The purpose of this page is to move the json array data
from the previous assignment and put it into a SQLite database
*/

require_once 'dbaccess.php';

$products = getProducts();

if (sizeof($products) == 0 && isset($_GET['products'])) {

     // Location of our database file
    $conn = new PDO('sqlite:db/mydb.db');

    // Some configuration
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $data = json_decode($_GET['products']);

    forEach($data as $product){
        
        addProduct( $product->name, 
                    $product->model_number,
                    $product->price,
                    $product->image_url,
                    $product->description
                );
    }

    // Close connection
    $conn = null;

    // Refresh this page so that the address bar doesn't contain long query string
    header('location: populate-products.php');
    die();

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Populate Database</title>
    <script type="text/javascript" src="js/products.js"></script>
</head>
<body>

    <table border="1">
        <tr>
            <th>pid</th><th>pname</th><th>model</th><th>price</th><th>img</th><th>descr</th>
        </tr>

        <?php
            $products = getProducts();
            if (sizeof($products) > 0){
                foreach ($products as $product){
                    echo "<tr><td>".$product['pid']."</td><td>".$product['pname']."</td><td>".$product['model']."</td><td>".$product['price']."</td><td>".$product['img']."</td><td>".$product['descr']."</td></tr>";
                }
            }
            else{ ?>

                <form id='form' action='/' method='post'>
                <button type='submit'>Populate Database From JSON Array</button>
                </form>

                <div id='info'></div>

                <script type='text/javascript'>

                    // update form action
                    document.getElementById('form').action = 'populate-products.php?products='+JSON.stringify(products);

                </script>
            <?php }
        ?>

    </table>

</body>
</html>