import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../services/moviesApi';
import { CastList } from 'components/Cast/Cast';
import { Loader } from 'components/Loader/Loader';

export const CastView = () => {
    const { moviesId } = useParams();
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchCast() {
            setLoading(true);
            try {
                const data = await getCast(moviesId);
                setActors(data.cast);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCast();

    }, [moviesId]);


    return (
        <>
            {loading && <Loader />}
            {actors && <CastList actors={actors} />}
        </>
    )
}
