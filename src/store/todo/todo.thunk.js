import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodoTask = createAsyncThunk(
    '/tasks/GET',
    async (_, ThunkAPI) => {
        try{
            const res = await fetch('/api/v1/taskList', {
                headers: {
                    'Content-type': "application/json",
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            const data = await res.json()
            if (data) return ThunkAPI.fulfillWithValue(data.items)
        }catch(err){
            return ThunkAPI.rejectWithValue('Something went wrong')
        }
    }
)


export const createTodoTask = createAsyncThunk(
    '/tasks/POST',
    async (payload, ThunkAPI) => {
        try{
            const res = await fetch('/api/v1/taskList', {
                method: 'POST',
                headers: {
                    'Content-type': "application/json",
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify([payload])
            })
            const data = await res.json()
            if (data) return ThunkAPI.fulfillWithValue(data.items.push(payload))
        }catch(err){
            return ThunkAPI.rejectWithValue('Something went wrong')
        }
    }
)


export const deleteTodoTask = createAsyncThunk(
    '/tasks/DELETE',
    async (payload, ThunkAPI) => {
        try{
            const res = await fetch(`/api/v1/taskList/${payload}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': "application/json",
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            const data = await res.json()
            if (data) return ThunkAPI.fulfillWithValue(data.items.filter(task => task._uuid !== payload))
        }catch(err){
            return ThunkAPI.rejectWithValue('Something went wrong')
        }
    }
)


export const finishTodoTask = createAsyncThunk(
    '/tasks/PUT',
    async (payload, ThunkAPI) => {
        try{
            const res = await fetch(`/api/v1/taskList/${payload}`, {
                method: 'PUT',
                headers: {
                    'Content-type': "application/json",
                    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
                },
                body: JSON.stringify({payload})
            })
            const data = await res.json()
            if (data) return ThunkAPI.fulfillWithValue(data.isCompleted = true)
        }catch(err){
            return ThunkAPI.rejectWithValue('Something went wrong')
        }
    }
)
