import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import moivesReducer from "./moviesSlice"
import gptReducer from './gptSlice'
import LangReducer from './langSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies:moivesReducer,
    gpt:gptReducer,
    lang:LangReducer,
  },
});
export default appStore;
