import './Movies.css'
import Header from "../Header/Header";
import SearchForm from "./SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import movies from "../../utils/mopMovies";

function Movies({isAuthPage}) {
  return (
    <>
      <Header isAuthPage={true}/>
      <main>
        <SearchForm/>
        <MoviesCardList movies={movies}/>
      </main>
      <Footer/>
    </>
  )
}

export default Movies