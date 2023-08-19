import React, {useState} from 'react';
import './MoviesCard.css';
import {useLocation} from 'react-router-dom';

function formatDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes}м`;
}

function MoviesCard({movie}) {
  const location = useLocation();
  const isSavedMoviesPage = location.pathname === '/saved-movies';
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

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
      <img className="movies-card__image" src={movie.image} alt={movie.nameRU}/>
      <div className="movies-card__description">
        <h3 className="movies-card__description-name">{movie.nameRU}</h3>
        <div className="movies-card__save">
          <button
            className={cardButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
        </div>
      </div>
      <p className="movies-card__duration">{formatDuration(movie.duration)}</p>
    </article>
  );
}

export default MoviesCard;
