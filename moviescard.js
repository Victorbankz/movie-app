import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};


import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieCard from './MovieCard';
import MoviePage from './MoviePage';

function App() {
  return (
    <Router>
      <div>
        {/* Route for movie card */}
        <Route exact path="/" component={MovieCard} />
        
        {/* Route for movie description and trailer page */}
        <Route path="/movie/:id" component={MoviePage} />
      </div>
    </Router>
  );
}

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      {/* Link to movie description and trailer page */}
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
}



export default MovieCard;