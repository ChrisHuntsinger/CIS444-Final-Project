<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Lovers - Review Sucessfully Submitted!</title>
</head>
<body>
    <?php
    file_put_contents('post_data.log', print_r($_POST, true));

    session_start();  // Start the session

    require_once("../config/config.php");

    $TableName = "reviews";

    $MovieId = $_POST['movieId'];
    $LoverId = $_SESSION['loverID'];  // Retrieve loverID from the session
    $Headline = $_POST['headline'];
    $Rating = $_POST['rating'];
    $Review = $_POST['reviewContent'];

    // Insert new review data into the table
    $sql = "INSERT INTO $TableName (movieID, loverID, headline, rating, review) VALUES (:movieID, :loverID, :headline, :rating, :review)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':movieID', $MovieId);
    $stmt->bindParam(':loverID', $LoverId);
    $stmt->bindParam(':headline', $Headline);
    $stmt->bindParam(':rating', $Rating);
    $stmt->bindParam(':review', $Review);

    // Execute the SQL statement
    $stmt->execute();

    // Close the database connection
    $pdo = null;

    // Display confirmation message and links to go back
    echo "<p>Review submitted sucessfully!</p>";
    echo "<p><a href='../pages/movie_review.html?id=${MovieId}'>Click here to go back to the movie you just reviewed.</a></p>";
    echo "<p><a href='../pages/index.html'>Click here to go back to the homepage.</a></p>";
    ?>
</body>
</html>