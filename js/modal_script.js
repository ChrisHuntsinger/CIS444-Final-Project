document.addEventListener('DOMContentLoaded', function () {
    // Function to update the Account/Profile section based on login status
    function updateWriteReviewButton() {
        // Make a fetch request to your PHP file to get the login status or user information
        fetch('../php/check_login_status.php')
            .then(response => response.json())
            .then(data => {
                const writeReviewButton = document.querySelector('.write_review_button');

                if (data.userIsLoggedIn) {
                    writeReviewButton.innerHTML =
                        // If logged in, enable the button and set the text accordingly
                        writeReviewButton.disabled = false;
                        writeReviewButton.textContent = 'Click here to write a review';
                } else {
                    writeReviewButton.innerHTML =
                        // If not logged in, disable the button and set the text accordingly
                        writeReviewButton.disabled = true;
                        writeReviewButton.textContent = 'Log in to write a review';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
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