import { useState } from 'react';
import getMovies from '../api/getMovies';
import ErrorAlert from './ErrorAlert';
import MovieField from './MovieField';

export default function MoviePortal() {
  const [searchInput, setSearchInput] = useState('');
  const [enteredSearch, setEnteredSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearchChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getMovies(searchInput, setMovies, setError).then(() => setEnteredSearch(searchInput));
  };

  return (
    <div className="row d-flex align-items-center justify-content-center mt-4">
      <div className="col-md-8">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search movie..." className="form-control" value={searchInput} onChange={handleSearchChange} />
        </form>
        <br />
        {error && <ErrorAlert error={error} enteredSearch={enteredSearch} />}
        {movies.length > 0 && (
          <p>
            Showing {movies.length} movies for &apos;{enteredSearch}&apos;
          </p>
        )}
        {movies.map(movie => (
          <MovieField key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
