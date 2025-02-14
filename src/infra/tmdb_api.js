import axios from "axios"


export class TMDBAPI {
    constructor(api_key) {
        this.api_key = api_key
        this.base_url = "https://api.themoviedb.org/3"
    }

    async getMovieDetail(id) {
        const resp = await axios.get(`${this.base_url}/movie/${id}?api_key=${this.api_key}`)
        return resp.data
    }

    async listGenres() {
        const resp = await axios.get(`${this.base_url}/genre/movie/list?api_key=${this.api_key}`)
        return resp.data.genres
    }

    async listMovies() {
        const resp = await axios.get(`${this.base_url}/discover/movie?api_key=${this.api_key}`)
        return resp.data.results
    }


    async listMoviesByGenre(genre_id) {
        const resp = await axios.get(`${this.base_url}/discover/movie?api_key=${this.api_key}&with_genres=${genre_id}`)
        return resp.data.results
    }

    getImgUrl(path) {
        return "https://image.tmdb.org/t/p/original/" + path
    }
}


