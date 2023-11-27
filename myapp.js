const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bcfa32290cmsh231de1b9059feb1p112cf4jsnd8dd971e4b53',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
    }
};
fetch(
    //'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
    'https://movie-database-alternative.p.rapidapi.com/?s=movie&r=json&page=1', options)
    .then(response => response.json())
    .then(response => {
        const movies = response.Search;
        const movieContainer = document.querySelector('.movie-container');

        movies.forEach(movie => {
            const name = movie.Title;
            const year = movie.Year;
            const poster = movie.Poster;

            const movieCard = document.createElement('div');
            movieCard.classList.add('movie'); // Add a class for styling

            movieCard.innerHTML = `
            <img src="${poster}" alt="${name}">
            <div class="movie-info">
                <h3>${name}</h3>
                <p>${year}</p>
            </div>
            `;

            //movieCard.classList.add('movie'); 
            movieContainer.appendChild(movieCard);
        });
    })
    .catch(err => console.error(err));
    
