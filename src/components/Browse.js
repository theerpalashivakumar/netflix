import React from "react";
import Header from "./Header";
// import { options } from "../utils/consonent";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // const dispatch = useDispatch()

  // const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
  // const getMoviesList = async () => {
  //   const data = await fetch(url, options);
  //   const json = await data.json();
  //   console.log(json.results);
  //   dispatch(addNowPlayingMovies(json.results))
  // };

  // useEffect(() => {
  //   getMoviesList();
  // }, []);

  useNowPlayingMovies()

  return (
    <div >
      {/* <h1>brose</h1> */}
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
