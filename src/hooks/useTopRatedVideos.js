
import React, { useEffect } from 'react'
import { options } from '../utils/consonent'
import { useDispatch } from 'react-redux'
import {  addTopRatedVideos } from '../utils/moviesSlice'
const useTopRatedVideos = () => {
    const dispatch = useDispatch()
    const URL_TOPRATED = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
    const getPopularVideo = async()=>{
        const data = await fetch(URL_TOPRATED,options)
        const json = await data.json()
        console.log(json.results)
        dispatch(addTopRatedVideos(json.results))

    }
    useEffect(()=>{
        getPopularVideo()
    })
}

export default useTopRatedVideos
