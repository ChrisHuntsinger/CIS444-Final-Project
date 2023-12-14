<?php
// Include your database connection configuration
require_once("../config/config.php");

// Check if movieId is provided in the request
if (!isset($_GET['movieId'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Missing movieId parameter']);
    exit();
}

$movieId = $_GET['movieId'];

// Fetch reviews from the database for the specified movieId
$sql = "SELECT reviews.headline, reviews.rating, reviews.review, lovers.username
        FROM reviews
        JOIN lovers ON reviews.loverID = lovers.loverID
        WHERE reviews.movieID = :movieID";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(':movieID', $movieId);
$stmt->execute();

// Fetch all reviews
$reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Close the database connection
$pdo = null;

// Send the reviews as JSON
header('Content-Type: application/json');
echo json_encode($reviews);
?>
