// import React, { useRef } from "react";
// import { lag, options } from "../utils/consonent";
// import { useDispatch, useSelector } from "react-redux";
// import openai from "../utils/openai";
// import { addGptMovies } from "../utils/gptSlice";

// const GptSearchBar = () => {
//   const searchText = useRef(null);
//   const changeLaguage = useSelector((store) => store.lang.changeLaguage);
//   // console.log(changeLaguage)
//   const dispatch = useDispatch()

//   const searchQuery =
//     "act as movie recomendations system and suggest some movies for the query " +
//     searchText.current.value +
//     " . only give me names of 5 movies, separated like the exmple result given ahead.Exmple Result: salaar,mad,gathiratnalu,darling, love2day ";


//   const searchMoviesTmdb = async(movie)=>{
//     const data = await fetch("https://api.themoviedb.org/3/search/"+ movie+"?include_adult=false&language=en-US&page=1", options)
//     const  json = await data.json()
//     dispatch(addGptMovies(json.results))

//   }
//   const HandleGptSearchClick = async () => {
//     console.log(searchText.current.value);
//     //make an api call
//     const gptResult = await openai.chat.completions.create({
//       messages: [{ role: "user", content: searchQuery }],
//       model: "gpt-3.5-turbo",
//     });

//     if(!gptResult.choices){
//       const error = "movie is not there"

//     }
//     // console.log(gptResult.choices?.[0]?.message?.content);
//     const movies = gptResult.choices?.[0]?.message?.content.split(',')
//     console.log(movies)
//    const gptMovies = movies.map(movie=>searchMoviesTmdb(movie))
//    const tmdbResult = await Promise.all(gptMovies)
//    console.log(tmdbResult)
     
//   };
//   return (
//     <div className=" justify-center flex">
//       <form
//         className="bg-black p-5 z-40 w-1/2 grid grid-cols-12 mt-[8%]"
//         onSubmit={(e) => e.preventDefault()}>
//         <input
//           ref={searchText}
//           type="text"
//           placeholder={lag[changeLaguage].placeholder}
//           className="col-span-10 p-2 rounded-lg"
//         />
//         <button
//           className="bg-red-500 rounded-lg px-0 py-1 text-white ml-2 col-span-2 p-2"
//           onClick={HandleGptSearchClick}>
//           {lag[changeLaguage].search}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default GptSearchBar;




import React, { useRef } from "react";
import { lag, options } from "../utils/consonent";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const changeLaguage = useSelector((store) => store.lang.changeLaguage);
  const dispatch = useDispatch();

  const searchMoviesTmdb = async (movie) => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" + encodeURIComponent(movie) + "&include_adult=false&language=en-US&page=1",
        options
      );
      const json = await response.json();
      return json.results;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  };

  const HandleGptSearchClick = async () => {
    if (!searchText.current || !searchText.current.value) {
      console.error("Search text is empty");
      return;
    }

    const searchQuery =
      "act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      " . only give me names of 5 movies, separated like the example result given ahead. Example Result: salaar,mad,gathiratnalu,darling,love2day";

    try {
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: "user", content: searchQuery }],
        model: "gpt-3.5-turbo",
      });

      if (!gptResult.choices || !gptResult.choices[0]) {
        console.error("No movie recommendations received from GPT");
        return;
      }

      const movies = gptResult.choices[0].message.content.split(",");
      const gptMovies = await Promise.all(
        movies.map((movie) => searchMoviesTmdb(movie.trim()))
      );

      // dispatch(addGptMovies(gptMovies.flat()));
      dispatch(addGptMovies({movieNames:movies, movieResult:gptMovies}));

      
      console.log(gptMovies);
    } catch (error) {
      console.error("Error in GPT search:", error);
    }
  };

  return (
    <div className="justify-center flex">
      <form
        className="bg-black p-5 z-40 w-1/2 grid grid-cols-12 mt-[8%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lag[changeLaguage].placeholder}
          className="col-span-10 p-2 rounded-lg"
        />
        <button
          className="bg-red-500 rounded-lg px-0 py-1 text-white ml-2 col-span-2 p-2"
          onClick={HandleGptSearchClick}
        >
          {lag[changeLaguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

