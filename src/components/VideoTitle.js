import React, { useState } from "react";

const VideoTitle = ({ overview, original_title }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold"> {original_title}</h1>
      {showInfo && <p className="text-lg  w-1/4">{overview}</p>}
      {/* <img src={poster_path} alt="poster" className='w-24 h-28' /> */}
      <div className="flex">
        <button className="bg-white rounded-xl text-black  border-2 border-gray-400 px-3 py-1 mr-2 hover:bg-slate-500 hover:text-white">
          {" "}
          ▶ Play
        </button>
        <button
          className="bg-gray-200 rounded-xl text-black   border-gray-400 px-3 py-1 mr-2"
          onClick={() => {
            setShowInfo(!showInfo);
          }}>
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
