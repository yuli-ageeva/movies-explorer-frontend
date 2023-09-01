const credentials = 'include'

class MainApi {
    constructor({baseUrl, commonHeaders, credentials}) {
        this._baseUrl = baseUrl;
        this.commonHeaders = commonHeaders;
        this.credentials = credentials;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return res.json()
            .then((body) => {
                return Promise.reject(new Error(body.message))
            })
    }

    getUserMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: this.commonHeaders,
            credentials: this.credentials,
        })
            .then(this._checkResponse)
    }

    saveMovie(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this.commonHeaders,
            credentials: this.credentials,
            body: JSON.stringify(movie),
        })
            .then(this._checkResponse)
    }

    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this.commonHeaders,
            credentials: this.credentials,
        })
            .then(this._checkResponse)
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this.commonHeaders,
            credentials: this.credentials,
        })
            .then(this._checkResponse)
    }

    login(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this.commonHeaders,
            credentials: this.credentials,
            body: JSON.stringify({email, password}),
        })
            .then(this._checkResponse)
    }

    logout() {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
            headers: this.commonHeaders,
            credentials: this.credentials,
        })
            .then((response) => {
                if (response.ok) {
                    return true
                } else {
                    return Promise.reject(new Error('Ошибка при logout'))
                }
            });
    }

    register(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this.commonHeaders,
            body: JSON.stringify({name, email, password}),
        })
            .then(this._checkResponse)
    }

    updateUser(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.commonHeaders,
            credentials: this.credentials,
            body: JSON.stringify({name, email})
        })
            .then(this._checkResponse)
    }
}

const mainApi = new MainApi({
    baseUrl: process.env.REACT_APP_MY_URL,
    commonHeaders: {
        'Content-Type': 'application/json',
    },
    credentials: credentials
});


export default mainApi;

