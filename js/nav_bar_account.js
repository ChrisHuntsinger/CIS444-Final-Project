document.addEventListener('DOMContentLoaded', function() {
    const userIsLoggedIn = false; // Change to true for a logged-in user

    // Function to update the account/profile section based on login status
    function updateAccountProfileSection() {
        const accountProfileSection = document.getElementById('accountProfileSection');
        accountProfileSection.innerHTML = '';

        if (userIsLoggedIn) {
            accountProfileSection.innerHTML = 
            "<span>Account/View Profile</span>"
            ;
        }
        else {
            accountProfileSection.innerHTML = 
            "<span>Register/Login</span>"
            ;
        }
    }

    // Call the function when the page loads
    updateAccountProfileSection();
});