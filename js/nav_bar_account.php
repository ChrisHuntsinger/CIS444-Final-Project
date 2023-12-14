<?php
// Start the session
session_start();

// Check if the user is logged in
$userIsLoggedIn = isset($_SESSION['user_id']);
?>

document.addEventListener('DOMContentLoaded', function() {
    const userIsLoggedIn = <?php echo $userIsLoggedIn ? 'true' : 'false'; ?>;

    // Function to update the account/profile section based on login status
    function updateAccountProfileSection() {
        const accountProfileSection = document.getElementById('accountProfileSection');
        accountProfileSection.innerHTML = '';

        if (userIsLoggedIn) {
            accountProfileSection.innerHTML = 
            "<button onclick='goToProfile()'>Account/View Profile</button>" +
            "<button onclick='logout()'>Log out</button>";
        } else {
            accountProfileSection.innerHTML = 
            "<button onclick='goToLogin()'>Register/Login</button>";
        }
    }

    // Call the function when the page loads
    updateAccountProfileSection();
});

// Functions for button actions
function goToProfile() {
    // Replace with the actual URL for the user's profile page
    window.location.href = '/profile';
}

function logout() {
    // Replace with the actual logout functionality
    console.log('Logging out...');
    window.location.href = '../pages/logout.php';
}

function goToLogin() {
    // Replace with the actual URL for the login/registration page
    window.location.href = '../pages/signin.html';
}
