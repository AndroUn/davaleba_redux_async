import  todoReducer  from "./todo/todo.slice";
import themeReducer from "./theme/theme.slice"
const { configureStore, combineReducers } = require("@reduxjs/toolkit");


const rootReducer = combineReducers({
    todo: todoReducer,
    theme: themeReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})