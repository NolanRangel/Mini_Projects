// api is sorted by popularity in desc order and only gives one page of data
//  api urls: https://www.themoviedb.org/settings/api
//  https://developers.themoviedb.org/3/getting-started/introduction
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2aa68e9df9117a65d18f76ef97a0d82d&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2aa68e9df9117a65d18f76ef97a0d82d&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');


// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results)
}

function showMovies(movies) {
    // reset the main window to not overlay information
    main.innerHTML = '';

    movies.forEach((movie) => {
        // use destructuring to pull values out of the movie object
        // and turn them into variables
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `

        main.appendChild(movieEl);
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

//  search function
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = ''
    } else {
        window.location.reload();
    }
})

