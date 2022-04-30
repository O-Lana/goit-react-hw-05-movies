import propTypes from 'prop-types';
import { MovieDetails, MovieTitle, DetailName } from "./MovieCard.styled";
import NoImage from '../../images/NoImageAvailable.png';

export const MovieCard = ({ movie }) => {
    const { title, release_date, poster_path, vote_average, overview, genres } = movie;
    const imgUrl = 'https://image.tmdb.org/t/p/w500';


    return (
        <MovieDetails>
            <img
                src={poster_path ? `${imgUrl}${poster_path}` : `${NoImage}`}
                alt={title}
            />

            <div>
                <MovieTitle>{title} ({release_date.slice(0, 4)})</MovieTitle>
                
                <p>User score: {vote_average * 10} %</p>
                
                <DetailName>Overview</DetailName>
                <p>{overview}</p>

                <DetailName>Genres:</DetailName>
                {genres && <p>{genres.map(genre => genre.name).join(', ')}</p>}
            </div>
        </MovieDetails>
    )
};

MovieCard.propTypes = {
    movie: propTypes.object.isRequired,
  };