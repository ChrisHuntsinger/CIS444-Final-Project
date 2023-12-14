const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

document.getElementById('movieId').value = movieId;

if (!movieId) {
    // Handle the case where no movie ID is provided in the URL
    alert('Movie ID not provided in the URL');
    // Redirect to another page or display an error message as needed
} else {
    // Fetch movie details using the movie ID
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: '(Insert your API key here)'
        }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(response => response.json())
        .then(movieDetails => {
            // Update the HTML content with dynamic movie details
            document.title = movieDetails.title;

            // Update movie title
            document.getElementById('movie_title').textContent = movieDetails.title;

            // Update year and duration
            document.getElementById('movie_year_dur').innerHTML = `${new Date(movieDetails.release_date).getFullYear()} &bull; ${movieDetails.runtime}m`;
        
            // Update movie poster
            document.getElementById('movie_poster_image').src = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

            // Update synopsis
            document.getElementById('synopsis').innerHTML = `${movieDetails.overview}`;
        })
        .catch(err => {
            console.error(err);
            alert('Failed to fetch movie details');
        });
    
    // Fetch movie videos
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options)
        .then(response => response.json())
        .then(videoDetails => {
            // Update movie trailer
            const trailerVideo = videoDetails.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

            if (trailerVideo) {
                // If a trailer is found, update the trailer player with the trailer key
                const trailerKey = trailerVideo.key;
                document.getElementById('movie_trailer_player').src = `https://www.youtube.com/embed/${trailerKey}`;
                console.log(`Trailer Key: ${trailerKey}`);
            } else {
                // If no trailer is found, handle it accordingly (e.g., display a message)
                console.log('No Trailer Found');
            }
        })
        .catch(err => {
            console.error(err);
            alert('Failed to fetch movie videos');
        });
    
    // Fetch director(s) and cast
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
        .then(response => response.json())
        .then(credits => {
            // Get containers for director(s) and cast members
            const directorContainer = document.getElementById('directors');
            const castContainer = document.getElementById('cast_members');

            // Update director(s) information
            const directors = credits.crew.filter(person => person.job === 'Director').slice(0, 3);
            const directorNames = directors.map(director => director.name);

            // Update director container
            directorContainer.innerHTML = `<ul>${directorNames.map(name => `<li>${name}</li>`).join('')}</ul>`;

            // Update cast members container with the first 5 cast members
            const castMembers = credits.cast.slice(0, 5);
            const castList = castMembers.map(person => `<li>${person.name}</li>`).join(''); 

            // Update cast members container
            castContainer.innerHTML = `<ul>${castList}</ul>`;
        })
        .catch(err => {
            console.error(err);
            alert('Failed to fetch credits');
        });
}
