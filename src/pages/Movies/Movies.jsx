import { useEffect, useState } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import api from '../../api/moviesApi';
import { MovieList } from './Movies.styled';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      const result = await api.getMoviesQuery(query);
      setMovies(result.data.results);
    };
    if (query) {
      fetchMovieByQuery();
    }
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query: event.target.searchfield.value });
    event.target.reset();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="searchfield"
            type="text"
            autoComplete="off"
            placeholder="Search movies"
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>
      </div>
      <MovieList>
        {movies.map(({ title, id, poster_path }) => {
          return (
            <li key={id}>
              <NavLink to={`${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300${poster_path} `
                      : `https://static.thenounproject.com/png/1642843-200.png`
                  }
                  alt={title}
                />
                <p> {title} </p>
              </NavLink>
            </li>
          );
        })}
      </MovieList>
    </div>
  );
}
