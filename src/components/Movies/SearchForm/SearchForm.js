import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import React, {useState} from 'react';
import {ERROR_SEARCH_FORM} from "../../../constants/constants";


function SearchForm({onSearch, queryInitialState, shortsOnlyInitialState}) {
    const [error, setError] = useState(ERROR_SEARCH_FORM);
    const [query, setQuery] = useState(queryInitialState)
    const [shortsOnly, setShortsOnly] = useState(shortsOnlyInitialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        search(query, shortsOnly)
    };

    const handleShortsCheckboxChange = (e) => {
        setShortsOnly(!shortsOnly)
        search(query, !shortsOnly)
    }

    const search = (searchQuery, shortsOnly) => {
        if (searchQuery) {
            setError('');
            onSearch(searchQuery, shortsOnly);
        }
    }

    return (
        <section className="search-form">
            <form className="search-form__form" name="search" onSubmit={handleSubmit}>
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
                {error && <p className="search-form__error">{error}</p>}
                <FilterCheckbox onChange={handleShortsCheckboxChange} isChecked={shortsOnly}/>
            </form>

        </section>
    );
}

export default SearchForm;
