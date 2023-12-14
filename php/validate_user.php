<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Lovers - Validation</title>
</head>
<body>
    <?php
    // Checks if the fields are empty
    if (empty($_POST['email']) || empty($_POST['password'])) {
        exit ("<p>You must enter values in all fields! Click your browser's Back button to return to the previous page.</p>");
    }

    $Email = $_POST['email'];
    $Password = $_POST['password'];

    // Connecting to the database with PDO
    require_once("../config/config.php");

    $TableName = "lovers";

    $sql = "SELECT * FROM $TableName
            WHERE email = :email
            AND password = :password";
    

    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':email', $Email);
    $stmt->bindParam(':password', $Password);
    $stmt->execute();

    // Fetch the user data
    if (!$row = $stmt->fetch()) {
        exit("<p>You must enter a valid email address and password. Click your browser's Back button to return to the previous page.</p>");
    }
    else {
        // Start the session and store user information
        session_start();
        $_SESSION['loverID'] = $row['loverID'];
        $_SESSION['username'] = $row['username'];
    }
    
    // Close the connection and free the resources used by the PDO object
    $pdo = null;
    ?>

    <!-- Send user to homepage -->
    <p>You're logged in!</p>
    <p><a href="../pages/index.html">Click here to go back to homepage!</a></p>

</body>
</html>