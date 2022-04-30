import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../services/moviesApi';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { AdditionalInfoList, LinkItem } from './styledView/MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';
import { BtnGoBack } from 'components/BtnGoBack/BtnGoBack';

export const MovieDetailsView = () => {
    const [movie, setMovie] = useState('');
    const [loading, setLoading] = useState(false);
    const { moviesId } = useParams();
    const location = useLocation();

    useEffect(() => {
        async function fetchMovieDetails() {
            setLoading(true);
            try {
                const film = await getMovieDetails(moviesId);
                setMovie(film);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchMovieDetails();

    }, [moviesId]);

        return (
           <>
                <BtnGoBack />
                {loading && <Loader />}
                {movie && <MovieCard movie={movie} />}

               {movie && <AdditionalInfoList>
                    <h2>Additional information</h2>
                    <ul>
                        <li>
                            <LinkItem to={`/movies/${movie.id}/cast`} state={{ from: location?.state?.from ?? '/' }}>Cast</LinkItem>
                        </li>
                        <li>
                            <LinkItem to={`/movies/${movie.id}/reviews`} state={{ from: location?.state?.from ?? '/' }}>Reviews</LinkItem>
                        </li>
                    </ul>
                </AdditionalInfoList>}

                <Outlet />
            </>
       )
}

