

import React, { useEffect, useState } from 'react'
import { options } from '../utils/consonent';

const useGetVideo = (movieId) => {
    const [getVideo,setGetVideo] = useState(null)
    const [error,setError]= useState(null)
    const [loading,setLoading]= useState(true)

    const getMovieVideo = async () => {

        try{
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                options
              );
              const json = await data.json();
              console.log(json);
              const trilarVideos = json?.results.filter((item)=>item.type==="Trailer")
              console.log(trilarVideos)
              const maintrailerVideo = trilarVideos.length >0 ?  trilarVideos[0]  :json.results[0]
              console.log(maintrailerVideo)
              setGetVideo(maintrailerVideo)
        }catch (error){
          setError('failed to fetch')  
        }finally{
            setLoading(false)
        }
        
       
      };
      useEffect(() => {
        if(movieId){
            getMovieVideo();
        }
        
      }, []);
     return {getVideo,loading,error}
}

export default useGetVideo
