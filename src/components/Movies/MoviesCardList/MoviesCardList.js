import React, {useEffect, useState} from 'react';
import './MoviesCardList.css'
import Preloader from "../../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from 'react-router-dom';
import gridParams from "../../../utils/GridParams";
import {NOT_FOUND_MESSAGE} from "../../../constants/constants";
import debounce from "../../../utils/debounce";

function MoviesCardList({movies, likes, isLoading, errorMessage, handleMovieLike, handleMovieUnlike}) {
    const location = useLocation();
    function shownMoviesCountInitialValue() {
        const grid = gridParams(window.innerWidth)
        return grid.rows * grid.columns
    }
    const [shownMoviesCount, setShownMoviesCount] = useState(shownMoviesCountInitialValue())

    const showAllMovies = location.pathname === '/saved-movies'

    const handleResize = () => {
        setShownMoviesCount(shownMoviesCountInitialValue())
    }

    useEffect(() => {
        const debouncedHandleResize = debounce(handleResize, 500)
        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    const handleLoadMore = () => {
        const grid = gridParams(window.innerWidth)
        const addMoviesCount = grid.columns * grid.step
        setShownMoviesCount(shownMoviesCount + addMoviesCount)
    };

    return <section className={`movies-card-list`}>
        {isLoading
            ? <Preloader/>
            : <>
                <div className={`movies-card-list__container`}>
                    {errorMessage != null
                        ? <p className="movies-card-list__title">{errorMessage}</p>
                        : (movies == null
                                ? ''
                                : (movies.length === 0
                                        ? <p className="movies-card-list__title">{NOT_FOUND_MESSAGE}</p>
                                        : (showAllMovies ? movies : movies.slice(0, shownMoviesCount)).map((movie) =>
                                            <MoviesCard
                                                key={movie.id || movie.movieId}
                                                movie={movie}
                                                isLiked={likes.includes(movie.id || movie.movieId)}
                                                handleMovieLike={handleMovieLike}
                                                handleMovieUnlike={handleMovieUnlike}
                                            />)
                                )
                        )}
                </div>
                {location.pathname === '/movies' && movies && movies.length > 0 && shownMoviesCount < movies.length
                    ? <button className="movies-card-list__more-button" type="button"
                              onClick={handleLoadMore}>Еще</button>
                    : ''
                }
            </>
        }
    </section>;

}


export default MoviesCardList;







