// src/components/MovieItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
  return (
    <li>
      <Link to={`/movie/${movie.imdbID}`}>
        {movie.Title} ({movie.Year})
      </Link>
    </li>
  );
}

export default MovieItem;
