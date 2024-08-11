import  { useEffect } from "react";
import { options } from "../utils/consonent";
import { useDispatch, useSelector } from "react-redux";
import { setTrailerError, setTrailerLoading, setTrailerVideo } from "../utils/moviesSlice";

const useGetVideo = (movieId) => {
  // const [getVideo, setGetVideo] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);
  

  const disptch = useDispatch()
  const { loading, video, error } = useSelector((state) => state.movies?.addTrailerVideo);


  const getMovieVideo = async () => {
    disptch(setTrailerLoading(true))
    try {
      const data = await fetch(
        // use can use these two ways 
        // `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, 
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",

        options
      );
      const json = await data.json();
      console.log(json);
      const trilarVideos = json?.results.filter(
        (item) => item.type === "Trailer"
      );
      console.log(trilarVideos);
      const maintrailerVideo =
        trilarVideos.length > 0 ? trilarVideos[0] : json.results[0];
      console.log(maintrailerVideo);
      disptch(setTrailerVideo(maintrailerVideo))
    } catch (error) {
      disptch(setTrailerError("Failed to fetch"))
    } finally {
      disptch(setTrailerLoading(false));
    }
  };
  useEffect(() => {
    if (movieId) {
      getMovieVideo();
    }
  }, []);
  return { loading, video, error };
};

export default useGetVideo;
