import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log(movies);
  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black  z-20">
        <div className="bg-transparent relative md:-mt-60  -mt-20">
          <MovieList
            movies={movies?.nowPlayingMovies}
            title={"now Playing Movies"}
          />
          <MovieList
            movies={movies?.popularVideos}
            title={"Popular Videos"}
          />

          <MovieList
            movies={movies?.topRatedVideos}
            title={"Top Rated Videos"}
          />

          <MovieList
            movies={movies?.nowPlayingMovies}
            title={"now Playing Movies"}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
