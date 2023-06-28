function MoviePage({ match }) {
    const { id } = match.params;
  
    // Fetch movie details based on the ID
  
    return (
      <div>
        {/* Display movie description and trailer */}
        <h2>Movie Description</h2>
        <p>{movie.description}</p>
        
        <h2>Movie Trailer</h2>
        <iframe src={movie.trailerLink} width="560" height="315" title="Movie Trailer" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    );
  }
  
  import { useHistory } from 'react-router-dom';

function MoviePage({ match }) {
  const { id } = match.params;
  const history = useHistory();

  // Fetch movie details based on the ID

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <div>
      {/* Display movie description and trailer */}
      <h2>Movie Description</h2>
      <p>{movie.description}</p>
      
      <h2>Movie Trailer</h2>
      <iframe src={movie.trailerLink} width="560" height="315" title="Movie Trailer" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

      {/* Button to navigate back */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}


  export default MoviePage;