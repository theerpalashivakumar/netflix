import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        gptViewSearch:false,
        // gptMovies:null,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        changeGptViewSearch:(state,action)=>{
          state.gptViewSearch = !state.gptViewSearch
        },
        addGptMovies:(state,action)=>{
            const {movieNames,movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        }
    }
})


export const {changeGptViewSearch,addGptMovies} = gptSlice.actions;
export default gptSlice.reducer;