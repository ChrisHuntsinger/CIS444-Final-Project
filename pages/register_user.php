<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Lovers - Registration</title>
</head>
<body>
    <?php
    // Check user input first
    if (empty($_POST['first_name']) || empty($_POST['last_name']) || empty($_POST['email']) || empty($_POST['username']) || empty($_POST['password']) || empty($_POST['password_confirm']))
        exit ("<p> You must enter values in all fields ! Click your browser's Back button to return to the previous page.</p>");
    else if ($_POST['password'] != $_POST['password_confirm'])
        exit ("<p> You did not enter the same password! Click your browser's Back button to return to the previous page.</p>");
    
    // Connecting to the database with PDO
    require_once("../config/config.php");

    $TableName = "lovers";
    $First = $_POST['first_name'];
    $Last = $_POST['last_name'];
    $Email = $_POST['email'];
    $Username = $_POST['username'];
    $Password = $_POST['password'];

    // Checks if email is already registered using a prepared statement
    $sql = "SELECT * FROM $TableName WHERE email = :email";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':email', $Email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        exit("<p>The email address you entered is already registered! Click your browser's Back button to return to the previous page.</p>");
    }

    // $result = $pdo->query($sql);
    // while ($row = $result->fetch()) {
    //     // Find email that matches the field from the table
    //     if ($row['email'] == $Email)
    //         exit("<p>The email address you entered is already registered! Click your browser's Back button to return to the previous page.</p>");
    // }

    // Insert new user data to the table
    // $sql = "INSERT INTO $TableName VALUES (NULL, '$Email','$Password',NULL,NULL,NULL,NULL,NULL,NULL,NULL)";

    // Insert new user data to the table using a prepared statement
    $sql = "INSERT INTO $TableName (first, last, email, username, password) VALUES (:first, :last, :email, :username, :password)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':first', $First);
    $stmt->bindParam(':last', $Last);
    $stmt->bindParam(':email', $Email);
    $stmt->bindParam(':username', $Username);
    $stmt->bindParam(':password', $Password);
    $stmt->execute();

    // $sql = "INSERT INTO $TableName (first, last, email, username, password) VALUES ('$First', '$Last', '$Email', '$Username', '$Password')";
    // $pdo->exec($sql);

    // Retrieve the loversID
    // $sql = "SELECT * FROM $TableName WHERE email = '$Email'";
    // $result = $pdo->query($sql);
    // if ($row = $result->fetch())
    //     $LoverID = $row['loverID'];

    // Retrieve the loverID
    $loverID = $pdo->lastInsertId();

    // Start the session and store user information - UNCOMMENT THIS WHEN USER CAN LOG OUT - LYLE
    // session_start();
    // $_SESSION['loverID'] = $loverID;
    // $_SESSION['username'] = $Username;

    // Closes the connection and frees the resources used by the PDO object
    $pdo = null;
    ?>

    <!-- Confirm Message -->
    <p>You're now a Movie Lover!</p>
    <p><a href="index.html">Click here to go back to homepage!</a></p>

</body>
</html>