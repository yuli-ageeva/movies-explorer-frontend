import {SHORT_FILM_MAX_DURATION} from "../constants/constants";


export default function search(query, shortsOnly, movies) {
    return movies.filter((movie) => matchesSearchQuery(movie, query, shortsOnly))
}

function matchesSearchQuery(movie, query, shortsOnly) {
    if (movie.duration > SHORT_FILM_MAX_DURATION && shortsOnly) {
        return false
    }
    const queryTokens = query.toLowerCase().split(' ')

    const matchesNameRu = queryTokens.every(token => movie.nameRU.toLowerCase().includes(token))
    const matchesNameEn = queryTokens.every(token => movie.nameEN.toLowerCase().includes(token))
    return matchesNameRu || matchesNameEn;

}