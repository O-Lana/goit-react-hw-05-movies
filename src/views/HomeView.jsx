import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/moviesApi';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';  

export const HomeView = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchTrendingMovies() {
            setLoading(true);
            try {
                const movies = await getTrendingMovies().then(data => data.results);
                setMovies(movies);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchTrendingMovies();   
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            <MoviesList movies={movies} />
            {loading && <Loader />}
        </> 
    );
};
