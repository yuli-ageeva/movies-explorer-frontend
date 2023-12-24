import {LOCAL_STORAGE_SEARCH_CONTEXT_KEY, LOCAL_STORAGE_USER_KEY} from "../constants/constants";


export const storeSearchContext = (searchContext) => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_CONTEXT_KEY, JSON.stringify(searchContext))
}

export const clearSearchContext = () => {
    localStorage.removeItem(LOCAL_STORAGE_SEARCH_CONTEXT_KEY)
}

export const loadSearchContext = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_SEARCH_CONTEXT_KEY)) || {
        query: '',
        shortsOnly: false,
        foundMovies: null,
    }
}

export const storeUser = (user) => {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user))
}

export const loadUser = () => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY))
}
export const clearUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
}

