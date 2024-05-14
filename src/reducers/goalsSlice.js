import { createSlice } from '@reduxjs/toolkit';


export const goalsSlice = createSlice({
    name: 'goals',
    initialState: {
        value: []
    },
    reducers: {
        addGoal: (state, action) => {
            state.value.push(action.payload);

            fetch('http://localhost:3001/addGoal', {
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
        initAddGoal: (state, action) => {
            state.value.push(action.payload);
        },
        deleteGoal: (state, action) => {

            fetch("http://localhost:3001/removeGoal/" + action.payload, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "tds2024"
                }
            }).catch(err => {
                console.log(err);
            })
            state.value = state.value.filter((goal) => goal.id !== action.payload);
        },
        clearGoals: (state) => {
            state.value = [];
        }
    }
})

export const { addGoal, deleteGoal, initAddGoal, clearGoals } = goalsSlice.actions;
export default goalsSlice.reducer;