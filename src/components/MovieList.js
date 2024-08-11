import React from "react";
import MovieCard from "./MovieCard";
import '../index.css';

const MovieList = ({ movies, title}) => {
  console.log(movies);
  //  const {poster_path} =movies
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }
  return  (
    <div className="py-3 px-5">
     <h1 className="font-bold text-white mb-2">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-thin">
        <div className="flex space-x-2">
        {movies.map(movie => <MovieCard posterPath={movie.poster_path}  key={movie.id}/>)}
        </div>
      </div>

      {/* <MovieCard title={"now playing"}  posterPath={poster_path} /> */}
    </div>
  );
};

export default MovieList;
