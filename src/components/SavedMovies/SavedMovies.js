import './SavedMovies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import movies from "../../utils/mopMovies";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

function SavedMovies({isAuthPage}) {
  return (
    <>
      <Header isAuthPage={true}/>
      <main className='save-movies-page'>
        <SearchForm/>
        <MoviesCardList movies={movies}/>
      </main>
      <Footer/>
    </>
  )
}

export default SavedMovies