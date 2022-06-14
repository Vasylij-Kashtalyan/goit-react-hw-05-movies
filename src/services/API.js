const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "dcf3bb54120e2f9c59dbcbb87469478c";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchHomePage() {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/movies/day?api_key=${KEY}`
  );
}

export function fetchMoviesPage(name) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${name}`
  );
}

export function fetchMovieDetailsPage(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${KEY}`);
}

export function FetchFilmCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
  );
}

export function fetchReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}`
  );
}
