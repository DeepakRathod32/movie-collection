// {
//     type: 'ADD_MOVIES',
//     movies = [m1, m2, m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }]

// actions types
export const ADD_MOVIES = 'ADD_MOVIES'; 
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'; 
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'; 
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'; 
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";



// action creators
export function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourites (movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFavourites (movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites (val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie){
    return {
        type: 'ADD_MOVIE_TO_LIST',
        movie
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
 
    return function(dispatch){
        fetch(url)
        .then(Response => Response.json())
        .then(movie => {
            dispatch(addMovieSearchResult(movie))
        })

        // dispatch an action
        
    }   
}

export function addMovieSearchResult (movie) {
    return { 
        type: ADD_SEARCH_RESULT,
         movie
        }
}