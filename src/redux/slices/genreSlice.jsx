import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_GENRE } from "../../constants/api"
import axios from "axios";

const initialState = {
    genres: []
}

export const getGenre = createAsyncThunk('getGenres', async () => {
    const resp = await axios.get(`${API_GENRE}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    return resp.data.genres;
})

export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {},
    extraReducers: (builder) => {//http request
        builder.addCase(getGenre.fulfilled, (state, action) => {
            state.genres = action.payload
        })
    }
})

export const { } = genreSlice.actions
export default genreSlice.reducer