import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        gptViewSearch:false
    },
    reducers:{
        changeGptViewSearch:(state,action)=>{
          state.gptViewSearch = !state.gptViewSearch
        }
    }
})


export const {changeGptViewSearch} = gptSlice.actions;
export default gptSlice.reducer;