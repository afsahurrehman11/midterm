// src/pages/MovieDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=bbd32bf5`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>Released: {movie.Released}</p>
      <p>Rating: {movie.imdbRating}</p>
    </div>
  );
}

export default MovieDetailsPage;
