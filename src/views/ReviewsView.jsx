import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../services/moviesApi';
import { ReviewsList } from 'components/Reviews/Reviews';
import { Loader } from 'components/Loader/Loader';

export const ReviewsView = () => {
    const {moviesId} = useParams();
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchReviews() {
            setLoading(true);
            try {
                const data = await getReviews(moviesId);
                setReviews(data.results);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
        
    }, [moviesId]);

    return (
        <>
            {loading && <Loader />}
            {reviews && <ReviewsList reviews={reviews} />}
        </>
    )
}