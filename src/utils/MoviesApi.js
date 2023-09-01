import {MOVIES_URL} from "../constants/constants";

class MoviesApi {
    constructor({baseUrl, commonHeaders}) {
        this.baseUrl = baseUrl;
        this.commonHeaders = commonHeaders;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getMovies() {
        return fetch(this.baseUrl, {headers: this.commonHeaders})
            .then(this._checkResponse)
    }
}

const moviesApi = new MoviesApi({
    baseUrl: MOVIES_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default moviesApi