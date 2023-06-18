import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({ title: '', rating: '' });

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  // Apply filters whenever there's a change in the filter inputs
  React.useEffect(() => {
    const filtered = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        movie.rating >= parseInt(filters.rating)
      );
    });
    setFilteredMovies(filtered);
  }, [movies, filters]);

  return (
    <div>
      <h1>Movie App</h1>
      <Filter handleFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <div>
        <h2>Add a new movie:</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const { title, description, posterURL, rating } = e.target.elements;
            handleAddMovie({
              title: title.value,
              description: description.value,
              posterURL: posterURL.value,
              rating: parseFloat(rating.value),
            });
            e.target.reset();
          }}
        >
          <input type="text" name="title" placeholder="Title" required />
          <input type="text" name="description" placeholder="Description" required />
          <input type="text" name="posterURL" placeholder="Poster URL" required />
          <input type="number" name="rating" placeholder="Rating" step="0.1" min="0" max="10" required />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default MovieApp;