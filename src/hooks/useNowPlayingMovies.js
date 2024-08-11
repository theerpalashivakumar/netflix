import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/consonent";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const getMoviesList = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getMoviesList();
  }, []);
};

export default useNowPlayingMovies;
