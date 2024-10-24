
// src/context/FavoritesContext.jsx
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
