import { createSlice } from "@reduxjs/toolkit";

const getFavoriteFromStorage = () => { // localden bilgi al
    try {
        const storedMovies = localStorage.getItem("favorite")
        return storedMovies ? JSON.parse(storedMovies) : []
    } catch (error) {
        console.error('parse', error);
        return []
    }
}

const writeFavoriteToStorage = (favorites) => { //locale bilgi gönder
    try {
        localStorage.setItem('favorite', JSON.stringify(favorites))
    } catch (error) {
        console.error('Save Error', error);

    }
}

const initialState = {
    favoriteMovies: getFavoriteFromStorage() // initialstate durumunda local ile eşitle
}


export const favoriteSlice = createSlice({
    name: 'favoriteSlice',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const findMovie = state.favoriteMovies?.some(movie => movie.id === action.payload.id)
            if (!findMovie) {
                state.favoriteMovies = [...state.favoriteMovies, action.payload]
                writeFavoriteToStorage(state.favoriteMovies)
            }
        },
        removeFavorite: (state, action) => {
            const filteredMovies = state.favoriteMovies?.filter(movie => movie.id !== action.payload.id)
            state.favoriteMovies = filteredMovies
            writeFavoriteToStorage(state.favoriteMovies)
        }
    }

})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer