
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('query');

if (searchQuery) {
    // If there's a search query, fetch movies based on the query
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bcfa32290cmsh231de1b9059feb1p112cf4jsnd8dd971e4b53',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        },
    };

    fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${searchQuery}&r=json&type=movie&page=1`, options)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            const moviesContainer = document.querySelector('.movies');

            movies.forEach(movie => {
                const name = movie.Title;
                const year = movie.Year;
                const poster = movie.Poster;
                const description = movie.description;

                const movieCard = document.createElement('li');
                movieCard.innerHTML = `
                    <img src="${poster}" alt="${name}">
                    <h3>${name}</h3>
                    <p>${year}</p>
                `;

                movieCard.classList.add('movie-card'); // Add a class for styling
                moviesContainer.appendChild(movieCard);
            });
        })
        .catch(err => console.error(err));
} else {
    // If there's no search query, fetch popular or trending movies
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bcfa32290cmsh231de1b9059feb1p112cf4jsnd8dd971e4b53',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        },
    };

    fetch('https://movie-database-alternative.p.rapidapi.com/popular?r=json&type=movie&page=1', options)
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            const moviesContainer = document.querySelector('.movies');

            movies.forEach(movie => {
                const name = movie.Title;
                const year = movie.Year;
                const poster = movie.Poster;
                const description = movie.description;

                const movieCard = document.createElement('li');
                movieCard.innerHTML = `
                    <img src="${poster}" alt="${name}">
                    <h3>${name}</h3>
                    <p>${year}</p>
                `;

                movieCard.classList.add('movie-card'); // Add a class for styling
                moviesContainer.appendChild(movieCard);
            });
        })
        .catch(err => console.error(err));
}
