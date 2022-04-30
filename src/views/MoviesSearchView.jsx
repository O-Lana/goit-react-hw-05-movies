import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from '../services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchBar/SearchBar';
import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';


export const MoviesSearchView = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);

    const query = searchParams.get('query') || '';
    
    useEffect(() => {
        if (query !== '') {
            async function fetchMovieSearch() {
                setLoading(true);
                try {
                    const movies = await getSearchMovie(query);
                    setMovies(movies.results);
                } catch (error) {
                    console.log(error.message);;
                } finally {
                    setLoading(false);
                }
            }

            fetchMovieSearch();
        }
        
    }, [query]);

    const handleSubmit = e => {
        e.preventDefault();
        const searchInput = e.target.search.value;

        if (searchInput.trim() === '') {
            toast.error('Enter movie title!');
            return;
        }

        setSearchParams({query: searchInput});
    }

    return (
       <>
            <Toaster position="top-center" reverseOrder={true} />
            <SearchForm onSubmit={handleSubmit} />
            {loading && <Loader />}
            {movies && <MoviesList movies={movies} />}
            {movies && !loading && movies.length === 0 && (<h3>Nothing was found!</h3>)}
       </>
    )
};
