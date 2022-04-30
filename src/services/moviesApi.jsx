import axios from 'axios';

const API_KEY = 'b9577cb72f619941d2b4ff770ab268ce';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

export async function getSearchMovie(query) {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    return response.data;
};

export async function getMovieDetails(id) {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

export async function getCast(id) {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

export async function getReviews(id) {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;
};