import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/dist/solar/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import MoviePortal from './components/MoviePortal';

function App() {
  return (
    <>
      <Header />
      <MoviePortal />
    </>
  );
}

export default App;
