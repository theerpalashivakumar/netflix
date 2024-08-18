import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";
import Logo from "../Assets/images/bg-image.jpg";
const GptSearch = () => {
  return (
    <>
      <div className="fixed z-10">
        <img src={Logo} className="object-cover h-screen w-screen" alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSearchSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
