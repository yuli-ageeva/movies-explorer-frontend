import React from 'react';
import './MoviesCardList.css'
import Preloader from "../../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from 'react-router-dom';

function MoviesCardList({movies, isLoading, isSavedMovies}) {
  const location = useLocation();
  return (
    <section className='movies-card-list'>
      {isLoading ? (
        <Preloader/>
      ) : (
        <>
          <div className="movies-card-list__container">
            {movies.length === 0 ? (
              <p className="movies-card-list__title">Ничего не найдено</p>
            ) : (
              movies.map((movie) => (
                <MoviesCard movie={movie} key={movie.movieId} isSavedMovies={isSavedMovies}/>
              ))
            )}
          </div>
          {location.pathname === '/movies' && (
            <button className='movies-card-list__more-button' type='button'>Еще</button>
          )}
        </>
      )}
    </section>
  );
}


export default MoviesCardList
