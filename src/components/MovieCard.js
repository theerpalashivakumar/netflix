import React from 'react'
import { IMAGE_CDN_URL } from '../utils/consonent'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (

      <div className='w-24 mr-3'>
        <img src={IMAGE_CDN_URL+posterPath} alt="posterImage"className='rounded-sm' />
    </div>
  )
}

export default MovieCard
