import './SavedMovies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";
import search from "../../utils/search";


function SavedMovies({savedMovies, handleMovieUnlike}) {
    const [searchParams, setSearchParams] = useState({query: "", shortsOnly: false});
    const [foundMovies, setFoundMovies] = useState(null);

    const searchMovies = (query, shortsOnly) => {
        setSearchParams({query, shortsOnly})
    }

    useEffect(() => {
        const foundMovies = search(searchParams.query, searchParams.shortsOnly, savedMovies)
        setFoundMovies(foundMovies);
    }, [searchParams, savedMovies])

    return (
        <>
            <Header/>
            <main className='save-movies-page'>
                <SearchForm
                    queryInitialState={searchParams.query}
                    shortsOnlyInitialState={searchParams.shortsOnly}
                    onSearch={searchMovies}
                />
                <MoviesCardList
                    movies={foundMovies}
                    likes={savedMovies.map((savedMovie) => savedMovie.movieId)}
                    isLoading={false}
                    errorMessage={null}
                    handleMovieUnlike={handleMovieUnlike}
                />
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies