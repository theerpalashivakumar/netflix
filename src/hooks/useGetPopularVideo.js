import React, { useEffect } from 'react'
import { options } from '../utils/consonent'
import { useDispatch } from 'react-redux'
import { addPopularVideos } from '../utils/moviesSlice'

const useGetPopularVideo = () => {
    const dispatch = useDispatch()
    const URL_POPULAR = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    const getPopularVideo = async()=>{
        const data = await fetch(URL_POPULAR,options)
        const json = await data.json()
        console.log(json.results)
        dispatch(addPopularVideos(json.results))

    }
    useEffect(()=>{
        getPopularVideo()
    })
}

export default useGetPopularVideo
