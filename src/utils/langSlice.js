import { createSlice } from "@reduxjs/toolkit";


const langSclie = createSlice({
    name:"lang",
    initialState:{
        changeLaguage:"en"
    },
    reducers:{
        changeLanuageSettig:(state,action)=>{
            state.changeLaguage = action.payload
        }
    }
})


export const {changeLanuageSettig}=langSclie.actions;

export default langSclie.reducer;