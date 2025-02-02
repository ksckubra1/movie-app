import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {},
    extraReducers: {
        //http request
    }
})

export const { } = genreSlice.actions
export default genreSlice.reducer