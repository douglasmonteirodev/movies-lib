import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard.jsx";
import { API } from "../Tmdb.js";
import "./MovieGrid.css";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${API.URL}top_rated?${API.KEY}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className='container'>
      <h2 className='title'>Melhores Filmes:</h2>
      <div className='movies-container'>
        {topMovies.length === 0 && "CARREGANDO..."}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
