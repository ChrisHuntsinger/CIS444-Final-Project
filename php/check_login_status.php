<?php
// Start the session
session_start();

// Check if the user is logged in
$userIsLoggedIn = isset($_SESSION['loverID']);

// Return the login status as JSON
header('Content-Type: application/json');
echo json_encode(['userIsLoggedIn' => $userIsLoggedIn]);
?>
