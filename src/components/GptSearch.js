import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestions from './GptSearchSuggestions'
import Logo from "../Assets/images/bg-image.jpg";
const GptSearch = () => {
  return (
    <div className="">
        <div className="fixed z-10">
        <img src={Logo} alt="logo" />
      </div>
      <GptSearchBar/>
      <GptSearchSuggestions/>
    </div>
  )
}

export default GptSearch
