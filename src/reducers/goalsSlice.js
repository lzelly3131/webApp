import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: [
        {
            'name': '',
            'description': '',
            'dueDate': ''
        }
    ]
}

export const goalsSlice = createSlice({
    name: 'goals',
    initialState,
    reducers: {
        addGoal: (state, action) => {
            state.value.push(action.payload);
        },
        deleteGoal: (state, action) =>{
            const index = state.value.findIndex(task => task.name === action.payload);
            state.value.splice(index, 1)
        }
    }
})

export const {addGoal} = goalsSlice.actions;
export const {deleteGoal} = goalsSlice.actions;
export default goalsSlice.reducer;