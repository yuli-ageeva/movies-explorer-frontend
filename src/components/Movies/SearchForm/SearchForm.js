import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form" name="search">
        <div className="search-form__bar">
          <input className="search-form__input" placeholder="Фильм" type="text" name="search" required/>
          <button
            className="search-form__submit-button" type="submit" aria-label="Поиск">Найти
          </button>
        </div>
      </form>
      <FilterCheckbox/>
    </section>
  );
}

export default SearchForm