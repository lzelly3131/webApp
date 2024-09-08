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
                console.err(err);
            })
        },
        initAddTask: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.value = state.value.filter((task) => task._id !== action.payload);

            fetch("http://localhost:3001/removeTask/" + action.payload, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "tds2024"
                }
            }).catch(err => {
                console.log(err);
            })
        },
        clearTasks: (state) => {
            state.value = [];
        },
        // Nueva función editTask
        editTask: (state, action) => {
            const { id, updatedTask } = action.payload;

            // Encontrar la tarea por ID y actualizarla en el estado
            const taskIndex = state.value.findIndex((task) => task._id === id);
            if (taskIndex >= 0) {
                state.value[taskIndex] = { ...state.value[taskIndex], ...updatedTask };

                // Llamada a la API para actualizar la tarea en el backend
                fetch(`http://localhost:3001/updateTask/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "tds2024"
                    },
                    body: JSON.stringify(updatedTask)
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
});

export const { addTask, initAddTask, deleteTask, clearTasks, editTask } = createTask.actions;
export default createTask.reducer;
