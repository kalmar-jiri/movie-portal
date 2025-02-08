import axios from 'axios';

const url = 'http://www.omdbapi.com/?apikey=ec325445&';

export default function getMovies(searchInput, setMovies, setError) {
  console.log(searchInput);
  console.log(typeof searchInput);

  const req = axios.get(`${url}s=${searchInput}`);
  return req.then(res => {
    if (res.data.Response === 'True') {
      // console.log('res.data');
      // console.log(res.data);
      const movieDetailsPromises = res.data.Search.map(movie => getMovieDetails(movie.imdbID, setError));
      Promise.all(movieDetailsPromises).then(movieDetails => {
        // console.log('movieDetails');
        // console.log(movieDetails);
        setMovies(movieDetails);
        setError(null);
      });
    } else {
      setMovies([]);
      setError(res.data.Error);
    }
  });
}

function getMovieDetails(id, setError) {
  const req = axios.get(`${url}i=${id}`);
  return req
    .then(res => {
      return res.data;
    })
    .catch(error => setError(error));
}
