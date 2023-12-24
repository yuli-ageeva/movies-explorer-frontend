import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import React, {useState} from 'react';
import {EMPTY_QUERY_SEARCH_FORM_ERROR} from "../../../constants/constants";
import {useLocation} from "react-router-dom";


function SearchForm({onSearch, queryInitialState, shortsOnlyInitialState}) {
    const location = useLocation()
    const isSavedMoviePage = location.pathname === '/saved-movies'
    const [error, setError] = useState(() => queryInitialState || isSavedMoviePage ? null : EMPTY_QUERY_SEARCH_FORM_ERROR);
    const [query, setQuery] = useState(queryInitialState)
    const [shortsOnly, setShortsOnly] = useState(shortsOnlyInitialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) {
            setError(EMPTY_QUERY_SEARCH_FORM_ERROR)
            return
        }
        setError(null)
        search(query, shortsOnly)
    };

    const handleShortsCheckboxChange = (e) => {
        setShortsOnly(!shortsOnly)
        search(query, !shortsOnly)
    }

    const search = (searchQuery, shortsOnly) => {
        if (searchQuery) {
            onSearch(searchQuery, shortsOnly);
        }
    }

    return (
        <section className="search-form">
            <form className="search-form__form" name="search" onSubmit={handleSubmit} noValidate>
                <div className="search-form__bar">
                    <input
                        className="search-form__input"
                        placeholder="Фильм"
                        type="text"
                        name="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                    />
                    <button className="search-form__submit-button" type="submit" aria-label="Поиск">
                        Найти
                    </button>
                </div>
                <span className="search-form__error">{error}</span>
                <FilterCheckbox onChange={handleShortsCheckboxChange} isChecked={shortsOnly}/>
            </form>

        </section>
    );
}

export default SearchForm;
