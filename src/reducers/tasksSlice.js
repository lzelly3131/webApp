import { createSlice } from '@reduxjs/toolkit';

export const createTask = createSlice({
    name: 'task',
    initialState: {
        value: [
            {
                'name': '',
                'description': '',
                'dueDate': ''
            }
        ]
    },
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTask: (state, action) =>{
            const index = state.value.findIndex(task => task.name === action.payload);
            state.value.splice(index, 1)
        }
    }
})

export const {addTask} = createTask.actions;
export const {deleteTask} = createTask.actions;
export default createTask.reducer;