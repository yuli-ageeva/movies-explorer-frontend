import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import Main from '../Main/Main';
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import mainApi from "../../utils/MainApi";
import CurrentUserContext from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {clearSearchContext, clearUser, loadUser, storeUser} from "../../utils/localStorage";
import UnauthorizedRoute from "../UnauthorizedRoute/UnauthorizedRoute";


function App() {
    const [currentUser, setCurrentUser] = useState(loadUser());
    const [savedMovies, setSavedMovies] = useState([])
    const navigate = useNavigate();


    const handleLogin = (email, password) => {
        return mainApi.login(email, password)
            .then(() => {
                mainApi.getUserInfo()
                    .then((data) => {
                        setUser(data);
                        navigate('/movies');
                    })
            })
    }

    const handleRegister = (name, email, password) => {
        return mainApi.register(name, email, password)
            .then(() => {
                mainApi.login(email, password)
                    .then((data) => {
                        setUser(data)
                        navigate('/movies');
                    })
            })
    };

    const handleLogout = () => {
        mainApi.logout().then(() => {
            clearSearchContext();
            unsetUser()
        })
    }

    const handleUpdateUser = (name, email) => {
        return mainApi.updateUser(name, email)
            .then((user) => {
                setUser(user)
            })
    }

    const setUser = (user) => {
        setCurrentUser(user)
        storeUser(user)
    }

    const unsetUser = () => {
        setCurrentUser(null)
        clearUser()
    }

    const handleMovieLike = (movie) => {
        mainApi
            .saveMovie({
                movieId: movie.id,
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            })
            .then((savedMovie) => {
                setSavedMovies([...savedMovies, savedMovie])
            })
            .catch((error) => {
                console.log(`Ошибка при добавлении фильма в избранное: ${error}`)
            });
    }

    const handleMovieUnlike = (movieId) => {
        const unlikedSavedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movieId);
        mainApi
            .deleteMovie(unlikedSavedMovie._id)
            .then(() => setSavedMovies(savedMovies.filter((savedMovie) => savedMovie.movieId !== movieId)))
            .catch((error) => {
                console.log(`Ошибка при удалении фильма из избранного: ${error}`)
            });
    }

    useEffect(() => {
        mainApi.getUserInfo().then((data) => {
            setUser(data)
        }).catch(() => {
            unsetUser()
        })
    }, [])

    useEffect(() => {
        mainApi.getUserMovies()
            .then((data) => {
                setSavedMovies(data);
            })
            .catch((error) => {
                console.error(`Ошибка при загрузке сохраненных фильмов: ${error}`);
            });
    }, [currentUser])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="root">
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route
                        path="/movies" element={
                        <ProtectedRoute element={Movies}
                                        savedMovies={savedMovies}
                                        handleMovieLike={handleMovieLike}
                                        handleMovieUnlike={handleMovieUnlike}
                        />}/>
                    <Route
                        path="/saved-movies" element={
                        <ProtectedRoute element={SavedMovies}
                                        savedMovies={savedMovies}
                                        handleMovieLike={handleMovieLike}
                                        handleMovieUnlike={handleMovieUnlike}
                        />}/>
                    <Route
                        path="/profile" element={
                        <ProtectedRoute element={Profile} handleLogout={handleLogout} onUserUpdate={handleUpdateUser}/>}/>
                    <Route path="/signin" element={
                        <UnauthorizedRoute element={Login} handleLogin={handleLogin}/>}/>
                    <Route path="/signup" element={
                        <UnauthorizedRoute element={Register} handleRegister={handleRegister}/>}/>
                    <Route path="/*" element={<NotFound/>}></Route>
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App

