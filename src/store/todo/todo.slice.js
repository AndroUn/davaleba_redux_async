import { createSlice } from "@reduxjs/toolkit"
import { getTodoTask } from "./todo.thunk"

const initialState = {
    todoList: [],
    loading: false,
    error: null
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers:{
        [getTodoTask.pending.type]:(state) => {
            state.loading = true
        },
        [getTodoTask.fulfilled.type]:(state, action) => {
            state.loading = false
            state.error = null
            state.todoList = action.payload
        },
        [getTodoTask.rejected.type]:(state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})



export default todoSlice.reducer