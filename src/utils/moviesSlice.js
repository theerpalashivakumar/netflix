import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addTrailerVideo:{
      loading:false,
      video:null,
      error:null
    }
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    //lodaing 
    setTrailerLoading:(state,action)=>{
      state.addTrailerVideo.loading = action.payload
   },
   //video
    setTrailerVideo:(state,action)=>{
       state.addTrailerVideo.video = action.payload
    },
    //error msg
   setTrailerError:(state,action)=>{
    state.addTrailerVideo.error = action.payload
 },

  },
});

export const { addNowPlayingMovies,setTrailerLoading,setTrailerVideo,setTrailerError } = moviesSlice.actions;
export default moviesSlice.reducer;
