import React, { useState } from "react";

const VideoTitle = ({ overview, original_title }) => {
  // const [showInfo, setShowInfo] = useState(true);
  return (
    <div className="px-10 pt-[16%] absolute  text-gray-600 bg-gradient-to-r from-black w-scree aspect-video max-h-screen">
      <h1 className="text-4xl font-bold mb-3 "> {original_title}</h1>
      {/* {showInfo && <p className="text-lg  w-1/4 mb-5">{overview}</p>} */}
      <p className="text-lg  w-1/4 mb-5">{overview}</p>
      {/* <img src={poster_path} alt="poster" className='w-24 h-28' /> */}
      <div className="flex">
        <button className="bg-white rounded-lg text-black  border-2 border-gray-400 px-5 py-1 mr-2 hover:bg-slate-500 hover:text-white">
          {" "}
          ▶ Play
        </button>
        <button
          className="bg-gray-200 rounded-lg text-black   border-gray-400 px-5 py-1 mr-2"
          // onClick={() => {
          //   setShowInfo(!showInfo);
          // }}>
>
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
