import { configureStore } from "@reduxjs/toolkit";
import metaReducer from "./reducers/goalsSlice";
import tareaReducer from "./reducers/tasksSlice";
import optionReducer from "./reducers/optionSlice";


export default configureStore({
    reducer:{
        goals:metaReducer,
        tasks: tareaReducer,
        option: optionReducer
    }
})