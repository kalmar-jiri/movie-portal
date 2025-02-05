import { useState } from 'react';
import getMovies from '../api/getMovies';

export default function MoviePortal() {
  const [searchInput, setSearchInput] = useState('');
  const [enteredSearch, setEnteredSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState([]);

  const handleSearchChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getMovies(searchInput, setMovies, setError).then(res => console.log(movies));
    setEnteredSearch(searchInput);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search movie..." className="form-control" value={searchInput} onChange={handleSearchChange} />
          {searchInput}
          <p>{enteredSearch}</p>
        </form>
      </div>
    </div>
  );
}
