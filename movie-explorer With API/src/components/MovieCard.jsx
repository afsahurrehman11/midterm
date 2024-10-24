// src/components/MovieCard.jsx
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const isFavorited = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <button
        onClick={() =>
          isFavorited ? removeFavorite(movie.imdbID) : addFavorite(movie)
        }
      >
        {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default MovieCard;
