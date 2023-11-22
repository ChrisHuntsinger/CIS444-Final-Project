
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bcfa32290cmsh231de1b9059feb1p112cf4jsnd8dd971e4b53',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
    },
};
fetch(
    //'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
    'https://movie-database-alternative.p.rapidapi.com/?s=action&r=json&page=1', options)
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
    

    /** 
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'bcfa32290cmsh231de1b9059feb1p112cf4jsnd8dd971e4b53',
			'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
		},
	};
	fetch(
        //'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
        'https://movie-database-alternative.p.rapidapi.com/?s=Married&r=json&page=1', options)
		
	
		.then(response => response.json())
        //.then(response => console.log(response))
		.then(response => {
            const movies = response.Search;
                movies.map(movie => {
               // console.log(movie.Title);
                const name = movie.Title;
                const year = movie.Year;
                const poster = movie.Poster;
                const description = movie.description;
               
                const moviecard = `<li><img src="${poster}" alt="${name}"><h3>${name}</h3><p>${year}</p><p>${description}</p></li>`;
                document.querySelector('.movies').innerHTML += moviecard;

            })
        })
		.catch(err => console.error(err));
        */

