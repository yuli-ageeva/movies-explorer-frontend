import React, {useState} from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";
import {SEARCH_ERROR} from "../../constants/constants";
import search from "../../utils/search";
import {loadSearchContext, storeSearchContext} from "../../utils/localStorage";
import moviesApi from "../../utils/MoviesApi";


function Movies({savedMovies, handleMovieLike, handleMovieUnlike}) {
    const [allMovies, setAllMovies] = useState(null)
    const [foundMovies, setFoundMovies] = useState(loadSearchContext().foundMovies);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const searchMovies = (query, shortsOnly) => {
        setIsLoading(true);
        setErrorMessage(null);

        getAllMovies()
            .then((allMovies) => {
                const foundMovies = search(query, shortsOnly, allMovies)
                setFoundMovies(foundMovies);
                storeSearchContext({query, shortsOnly, foundMovies})
            })
            .catch(() => setErrorMessage(SEARCH_ERROR))
            .finally(() => setIsLoading(false))
    };

    const getAllMovies = () => {
        if (allMovies) {
            return Promise.resolve(allMovies)
        }
        return moviesApi.getMovies()
            .then((movies) => {
                setAllMovies(movies)
                return movies
            })
    }


    return (
        <>
            <Header/>
            <main>
                <SearchForm
                    onSearch={searchMovies}
                    shortsOnlyInitialState={loadSearchContext().shortsOnly}
                    queryInitialState={loadSearchContext().query}
                />
                {isLoading
                    ? <Preloader/>
                    : <
                    MoviesCardList
                        movies={foundMovies}
                        likes={savedMovies.map((savedMovie) => savedMovie.movieId)}
                        isLoading={isLoading}
                        errorMessage={errorMessage}
                        handleMovieLike={handleMovieLike}
                        handleMovieUnlike={handleMovieUnlike}
                    />
                }
            </main>
            <Footer/>
        </>
    );
}

export default Movies;
