const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('query');

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDZlNWIxYjIzNDJmNGZkYWU2YjY3NDE1YjNlNzljMSIsInN1YiI6IjY1NjA1NjlmYTZjMTA0MDEzODI4ZjcxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JX6Ri_cInTlnULLgV79GhKBMkl49wRQ2_aV0b48Lumg'
  }
};

// If no search query or empty, populate page with most popular at the time
// Else, look up movie
const apiUrl = searchQuery
  ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&include_adult=false&language=en-US&page=1`
  : 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

fetch(apiUrl, options)
  .then(response => response.json())
  .then(response => {
    const movies = response.results || [];
    const moviesContainer = document.querySelector('.movie-container'); // Update class name

    movies.forEach(movie => {
      const name = movie.title;
      const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
      const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

      const movieCard = document.createElement('div');
      movieCard.classList.add('movie'); // Add a class for styling

      movieCard.innerHTML = `
        <img src="${poster}" alt="${name}" data-movie-id="${movie.id}">
        <div class="movie-info">
            <h3>${name}</h3>
            <p>${year}</p>
        </div>
      `;

      // Add click event listener to each movie poster
      const moviePoster = movieCard.querySelector('img');
      moviePoster.addEventListener('click', () => {
        // Redirect to movie_review.html with the movie ID as a parameter
        const movieId = moviePoster.getAttribute('data-movie-id');
        window.location.href = `movie_review.html?id=${movieId}`;
      });

      moviesContainer.appendChild(movieCard);
    });
  })
  .catch(err => console.error(err));
