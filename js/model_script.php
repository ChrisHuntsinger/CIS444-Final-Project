<?php
// Start the session
session_start();

// Check if the user is logged in
$userIsLoggedIn = isset($_SESSION['loverID']);
?>

console.log(movieId); // Check the value in the console

document.getElementById('movieId').value = movieId;

document.addEventListener('DOMContentLoaded', function() {
    const userIsLoggedIn = <?php echo $userIsLoggedIn ? 'true' : 'false'; ?>;

    // Function to update the write review button based on login status
    function updateWriteReviewButton() {
        const writeReviewButton = document.querySelector('.write_review_button');

        if (!userIsLoggedIn) {
            // If not logged in, disable the button and set the text accordingly
            writeReviewButton.disabled = true;
            writeReviewButton.textContent = 'Log in to write a review';
        } else {
            // If logged in, enable the button and set the text accordingly
            writeReviewButton.disabled = false;
            writeReviewButton.textContent = 'Click here to write a review';
        }
    }

    // Call the function when the page loads
    updateWriteReviewButton();
});

// Function to open the review modal
function openReviewModal() {
    document.getElementById('reviewModal').style.display = 'block';
}

// Function to close the review modal
function closeReviewModal() {
    document.getElementById('reviewModal').style.display = 'none';
}

// Attach an event listener to the "write_review_button"
document.querySelector('.write_review_button').addEventListener('click', function(event) {
    // // Prevent the default behavior of the button (e.g., form submission)
    event.preventDefault();

    // Open the review modal
    openReviewModal();
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    // Prevent the default form submission
    event.preventDefault();

    closeReviewModal();
}