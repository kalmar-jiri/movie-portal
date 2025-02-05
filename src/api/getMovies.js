import axios from 'axios';

const url = 'http://www.omdbapi.com/?apikey=ec325445&s=';

export default function getMovies(searchInput, setMovies, setError) {
  console.log(searchInput);
  console.log(typeof searchInput);

  const req = axios.get(`${url}${searchInput}`);
  return req.then(res => {
    if (res.data.Response === 'True') {
      console.log(res.data);
      setMovies(res.data.Search);
      setError(null);
    } else {
      setMovies([]);
      setError(res.data.Error);
    }
  });
}
