import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './movies';

const App = () => (
  <>
    <Header />
    <div className="content">
      <MovieList movies={movies} />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
