
import React, { useEffect } from 'react'
import { options } from '../utils/consonent'
import { useDispatch, useSelector } from 'react-redux'
import {  addTopRatedVideos } from '../utils/moviesSlice'
const useTopRatedVideos = () => {
    const dispatch = useDispatch()
    const topRatedVideos = useSelector(store=>store.movies.topRatedVideos)

    const URL_TOPRATED = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
    const getPopularVideo = async()=>{
        const data = await fetch(URL_TOPRATED,options)
        const json = await data.json()
        console.log(json.results)
        dispatch(addTopRatedVideos(json.results))

    }
    useEffect(()=>{
        !topRatedVideos && getPopularVideo()
    })
}

export default useTopRatedVideos
