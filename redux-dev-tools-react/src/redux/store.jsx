import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { fruitReducer } from "./fruit/fruitSlice";
import logger from "redux-logger";



const store = configureStore({

  reducer: fruitReducer,

  middleware: (getDefaultMiddleware) => {
    const defaultArr = getDefaultMiddleware();
    return [...defaultArr, logger];
  }
  
});


export default store;