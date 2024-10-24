// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

function HomePage() {
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // To manage the page of default movies

  const apiKey = 'bbd32bf5'; // Your API key here

  // Function to fetch default random movies (20 at a time)
  const fetchDefaultMovies = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=movie&apikey=${apiKey}&page=${page}`
      );
      setDefaultMovies((prevMovies) => [...prevMovies, ...response.data.Search]);
    } catch (error) {
      console.error('Error fetching default movies:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch default movies on component mount and when page changes
  useEffect(() => {
    fetchDefaultMovies(page);
  }, [page]);

  // Function to handle movie search
  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}&page=1`
      );
      setSearchResults(response.data.Search);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load more default movies when "Load More" is clicked
  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Decide what movies to display (either default or search results)
  const moviesToDisplay = searchResults.length > 0 ? searchResults : defaultMovies;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="movie-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {moviesToDisplay?.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
            {/* Only show 'Load More' button if displaying default movies */}
            {searchResults.length === 0 && (
              <button className="load-more-btn" onClick={loadMoreMovies}>
                Load More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
