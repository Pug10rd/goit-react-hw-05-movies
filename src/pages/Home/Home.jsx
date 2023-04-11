import api from '../../api/moviesApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendWrap, MovieList, MovieItem } from './Home.styled';

function Home() {
  const [moviesDay, setMoviesDay] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await api.getMoviesDay();
      setMoviesDay(result.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <main>
        <h1>Trending today</h1>
        <TrendWrap>
          <MovieList>
            {moviesDay.map(({ title, id, poster_path }) => {
              return (
                <MovieItem key={id}>
                  <Link to={`movies/${id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${poster_path} `}
                      alt={title}
                    />
                    <p>{title}</p>
                  </Link>
                </MovieItem>
              );
            })}
          </MovieList>
        </TrendWrap>
      </main>
    </div>
  );
}

export default Home;
