const API_KEY = 'TMDB_API_KEY'; 
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const gallery = document.getElementById('gallery');

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const movies = data.results;

    movies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');

      card.innerHTML = `
        <img src="${IMG_BASE_URL + movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-description">${movie.overview.slice(0, 120)}...</div>
        </div>
      `;

      gallery.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching movies:', error);
    gallery.innerHTML = '<p>Failed to load movies.</p>';
  });
