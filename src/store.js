import { configureStore } from "@reduxjs/toolkit";
import tareaReducer from "./reducers/tasksSlice";


export default configureStore({
    reducer:{
        tasks: tareaReducer,
    }
})