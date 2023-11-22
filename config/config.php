<?php


    $connString = "mysql:host=localhost; dbname=movie_lovers";
    $user="root";
    $password="root";

    $pdo = new pdo($connString, $user, $password);

    //useful during initial development and debugging
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

?>
