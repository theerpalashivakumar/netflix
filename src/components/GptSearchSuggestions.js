import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="z-20 relative p-4 m-4 bg-slate-900 text-white">
      {/* <h1 className='text-white'>suggestions</h1> */}
      <div>
        {movieNames.map((eachMovie, index) => (
          <MovieList
            title={eachMovie.movieName}
            key={eachMovie.movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptSearchSuggestions;
