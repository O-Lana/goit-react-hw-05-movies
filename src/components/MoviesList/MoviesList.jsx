import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { ListItem } from './MoviesList.styled';

export const MoviesList = ({movies}) => {
    const location = useLocation();

    return (
        <>
            <ul>
                {movies.map(({id, title}) => (
                    <ListItem key={id}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                    </ListItem>
                ))}
            </ul>
        </>
    );
};

MoviesList.propTypes = {
    movies: propTypes.arrayOf(propTypes.object).isRequired,
};