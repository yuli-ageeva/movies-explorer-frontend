import React, {useState} from 'react';
import './MoviesCard.css';
import {Link, useLocation} from 'react-router-dom';

function formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
}

function MoviesCard({movie, isLiked, handleMovieLike, handleMovieUnlike}) {
    const location = useLocation();
    const isSavedMoviesPage = location.pathname === '/saved-movies';
    const [isHovered, setIsHovered] = useState(false);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleLikeOrUnlikeClick = () => {
        if (isLiked) {
            handleMovieUnlike(movie.id || movie.movieId)
        } else {
            handleMovieLike(movie)
        }
    }

    const cardButtonClassName = `movies-card__like ${
        isSavedMoviesPage
            ? 'movies-card__button-delete'
            : isLiked
                ? 'movies-card__like_active'
                : ''
    } ${isSavedMoviesPage && isHovered ? 'movies-card__button-delete_hover' : ''}`;

    return (
        <article
            className="movies-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={movie.trailerLink} target="_blank" rel="noreferrer">
                <img
                    className="movies-card__image"
                    src={
                        location.pathname === '/movies'
                            ? `https://api.nomoreparties.co${movie.image.url}`
                            : movie.image
                    }
                    alt={movie.nameRU}
                />
            </Link>
            <div className="movies-card__description">
                <h2 className="movies-card__description-name">{movie.nameRU}</h2>
                <div className="movies-card__save">
                    <button
                        className={cardButtonClassName}
                        type="button"
                        onClick={handleLikeOrUnlikeClick}
                    ></button>
                </div>
            </div>
            <p className="movies-card__duration">{formatDuration(movie.duration)}</p>
        </article>
    );
}

export default MoviesCard;


