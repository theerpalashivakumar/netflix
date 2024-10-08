import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview,poster_path,id } = mainMovie;
  return (
    <div className="pt-[20%] bg-black md:pt-[0%]">
      <VideoTitle overview={overview} original_title={original_title} poster_path={poster_path}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
