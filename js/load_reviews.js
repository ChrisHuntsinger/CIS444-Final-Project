fetch(`../php/reviews-endpoint.php?movieId=${movieId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(reviews => {
        // Update user reviews container
        const usersReviewsContainer = document.getElementById('users_reviews_container');
        usersReviewsContainer.innerHTML = '';

        reviews.forEach(review => {
            // Create a review element
            const reviewElement = document.createElement('div');
            reviewElement.className = 'user_review';

            // Populate review content
            reviewElement.innerHTML = `
                <table style="width: 100%;">
                    <tr>
                        <td style="text-align: left; font-size: 26px; font-weight: bold;">
                            <div id="review_title">${review.headline}</div>
                        </td>
                        <td style="text-align: right;">
                            <div id="review_rating">Rating: ${review.rating}/5</div>
                        </td>
                    </tr>
                </table>
                <hr>
                <div id="user">Written by: ${review.username}</div>
                <p>
                    <div id="user-review">${review.review}</div>
                </p>
            `;

            // Append the review element to the container
            usersReviewsContainer.appendChild(reviewElement);
        });
    })
    .catch(err => {
        console.error(err);
        alert('Failed to fetch user reviews');
    });