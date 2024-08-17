import React from "react";
import {lag} from "../utils/consonent";
import { useSelector } from "react-redux";


const GptSearchBar = () => {
  const changeLaguage = useSelector(store=>store.lang.changeLaguage)
  console.log(changeLaguage)
  return (
    <div className=" justify-center flex">
      
      <form className="bg-black p-5 z-40 w-1/2 grid grid-cols-12 mt-[8%]">
        <input type="text" placeholder={lag[changeLaguage].placeholder} className="col-span-10 p-2 rounded-lg" />
        <button className="bg-red-500 rounded-lg px-0 py-1 text-white ml-2 col-span-2 p-2">{lag[changeLaguage].search}</button>

      </form>
    </div>
  );
};

export default GptSearchBar;
