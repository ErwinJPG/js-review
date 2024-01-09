<?php

// Code adapted from https://www.sourcecodester.com/tutorials/php/12699/php-simple-crud-sqlite-using-pdo.html

    // Location of our database file
    $conn = new PDO('sqlite:db/mydb.db');

    // Some configuration
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQLite query to create a table in our database if it doesn't already exit
    $query = "CREATE TABLE IF NOT EXISTS products(
                pid INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                pname TEXT NOT NULL,
                model TEXT NOT NULL,
                price TEXT NOT NULL,
                img TEXT,
                descr TEXT )";
 
    // Perform the query on our database
	$conn->exec($query);

    // Close connection
    $conn = null;

    // Takes values for each field in the products table, adds product to products table
    function addProduct($pname, $model, $price, $img, $descr){

        // Location of our database file
        $conn = new PDO('sqlite:db/mydb.db');

        $query = "INSERT INTO `products` (pname, model, price, img, descr) VALUES(:pname, :model, :price, :img, :descr)";
 
		$stmt = $conn->prepare($query);

        //To prevent any injection we must use parameterized query
		$stmt->bindParam(':pname', $pname);
		$stmt->bindParam(':model', $model);
		$stmt->bindParam(':price', $price);
		$stmt->bindParam(':img', $img);
        $stmt->bindParam(':descr', $descr);
 
        // Perform the query on our database
		$stmt->execute();

        // Close connection
		$conn = null;
    }

    // Reads all rows from products table
    function getProducts(){
        
        // Location of our database file
        $conn = new PDO('sqlite:db/mydb.db');

        // Set errormode to exceptions
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = "SELECT * FROM products";

        $stmt = $conn->query($query);

        $products = [];
        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $products[] = [
                'pid' => $row['pid'],
                'pname' => $row['pname'],
                'model' => $row['model'],
                'price' => $row['price'],
                'img' => $row['img'],
                'descr' => $row['descr']
            ];
        }
        return $products;
    }

    // Reads all rows from products table
    function searchProducts($pattern){
        
        // Location of our database file
        $conn = new PDO('sqlite:db/mydb.db');

        $query = "SELECT * FROM products WHERE pname LIKE :pattern OR descr LIKE :pattern";

        // Perform the query on our database
        $stmt = $conn->prepare($query);

        //To prevent any injection we must use parameterized query
        $stmt->bindValue(':pattern', '%'.$pattern.'%', PDO::PARAM_STR);

        // Perform the query on our database
		$stmt->execute();

        $products = [];
        while ($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
            $products[] = [
                'pid' => $row['pid'],
                'pname' => $row['pname'],
                'model' => $row['model'],
                'price' => $row['price'],
                'img' => $row['img'],
                'descr' => $row['descr']
            ];
        }
        return $products;
    }

    // Takes a product id ($pid) integer and 5 strings
    // assigns strings to columns in row with id $pid
    function updateProduct($pid, $pname, $model, $price, $img, $descr){

        // Location of our database file
        $conn = new PDO('sqlite:db/mydb.db');

        $query = "UPDATE `products` SET `pname` = :pname, `model` = :model, `price` = :price, `img` = :img, `descr` = :descr WHERE `pid` = :pid";
 
		$stmt = $conn->prepare($query);
		$stmt->bindParam(':pname', $pname, PDO::PARAM_STR);
		$stmt->bindParam(':model', $model, PDO::PARAM_STR);
		$stmt->bindParam(':price', $price, PDO::PARAM_STR);
		$stmt->bindParam(':img', $img, PDO::PARAM_STR);
		$stmt->bindParam(':descr', $descr, PDO::PARAM_STR);
        $stmt->bindParam(':pid', $pid, PDO::PARAM_INT);
 
        // Perform the query on our database
		$stmt->execute();

        // Close connection
		$conn = null;

    }

    function removeProduct($pid){

        // Location of our database file
        $conn = new PDO('sqlite:db/mydb.db');

        $query = "DELETE FROM `products` WHERE pid = :pid";
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':pid', $pid, PDO::PARAM_INT);
		

        // Perform the query on our database
		$stmt->execute();

        // Close connection
		$conn = null;
    }



?>