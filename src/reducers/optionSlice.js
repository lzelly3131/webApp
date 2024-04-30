import { createSlice } from "@reduxjs/toolkit";

const initialState = { value : 'Tarea'};

export const optionState = createSlice ({
    name: 'option',
    initialState,
    reducers:{
        changeOption: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeOption } = optionState.actions;

export default optionState.reducer;