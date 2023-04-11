import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/moviesApi';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const result = await api.getMoviesCast(movieId);
      setCast(result.data.cast);
    };
    fetchCast(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {cast.map(cast => {
        return (
          <li key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : `https://abrakadabra.fun/uploads/posts/2021-12/1640528638_13-abrakadabra-fun-p-serii-chelovek-na-avu-15.jpg`
              }
              alt={cast.name}
            />
            <h2> {cast.name}</h2>
            <p>Character: {cast.character}</p>
          </li>
        );
      })}
    </ul>
  );
}
