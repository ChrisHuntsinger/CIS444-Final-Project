document.addEventListener('DOMContentLoaded', function () {
    // Function to update the Account/Profile section based on login status
    function updateAccountProfileSection() {
        // Make a fetch request to your PHP file to get the login status or user information
        fetch('../php/check_login_status.php')
            .then(response => response.json())
            .then(data => {
                const accountProfileSection = document.getElementById('accountProfileSection');
                accountProfileSection.innerHTML = '';

                if (data.userIsLoggedIn) {
                    accountProfileSection.innerHTML =
                        "<button onclick='goToProfile()'>Account/View Profile</button>" +
                        "<button onclick='logout()'>Log out</button>";
                } else {
                    accountProfileSection.innerHTML =
                        "<button onclick='goToLogin()'>Register/Login</button>";
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Call the function when the page loads
    updateAccountProfileSection();
});

// Functions for button actions
function goToProfile() {
    window.location.href = '../pages/profile_page.html';
};

function logout() {
    console.log('Logging out...');
    window.location.href = '../php/logout.php';
};

function goToLogin() {
    window.location.href = '../pages/signin.html';
};
