import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/moviesApi';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const result = await api.getMoviesReviews(movieId);
      setReviews(result.data.results);
      // console.log(result.data.results);
    };
    fetchReviews(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {reviews.length ? (
        reviews.map(review => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <h2>We don't have any reviews for this movie.</h2>
      )}
    </ul>
  );
}
