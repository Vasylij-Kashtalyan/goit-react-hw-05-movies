const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "dcf3bb54120e2f9c59dbcbb87469478c";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchHomePage() {
  return fetchWithErrorHandling(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export function fetchMoviesPage(name) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${name}`
  );
}

export function fetchMovieDetailsPage(bookId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movies/get-movie-details?api_key=${KEY}`
  );
}

export function fetchCast(bookId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movies/get-movie-credits?api_key=${KEY}`
  );
}

export function fetchReviews(bookId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movies/get-movie-reviews?api_key=${KEY}`
  );
}
