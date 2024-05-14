import { createSlice } from '@reduxjs/toolkit';

export const createTask = createSlice({
    name: 'task',
    initialState: {
        value: []
    },
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload);

            fetch('http://localhost:3001/addTask', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "tds2024"
                },
                body: JSON.stringify(action.payload)
            }).catch(err => {
                console.log(err);
            })
        },
        initAddTask: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTask: (state, action) => {


            fetch("http://localhost:3001/removeTask/" + action.payload, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "tds2024"
                }
            }).catch(err => {
                console.log(err);
            })
            state.value = state.value.filter((task) => task.id !== action.payload);
        }, clearTasks: (state) => {
            state.value = [];
        }
    }
})

export const { addTask, initAddTask, deleteTask, clearTasks } = createTask.actions;
export default createTask.reducer;