import { createSelector, createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: 'white'
}




const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state.theme == 'white' ){
                state.theme = '#141f30'
            }else{
                state.theme = 'white'
            }
        }
    }
})

export const {toggleTheme, toggleColor} = themeSlice.actions
export default themeSlice.reducer