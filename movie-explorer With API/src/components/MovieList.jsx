// src/components/MovieList.jsx
import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies }) {
  if (!movies) return <p>No movies found.</p>;

  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
