import {store} from "../store";
import {getMovies} from "./movies";


import {
    GET_CHOOSE_MOVIE_RESOLVED,
    GET_CHOOSE_MOVIE_DEFAULT_RESOLVED
} from "../constants";

export const checkMoviesOrGetMovies = (payLoad) => ({
    type: GET_CHOOSE_MOVIE_RESOLVED,
    payLoad
});
export const defaultGetMovies = (payLoad) => ({
    type: GET_CHOOSE_MOVIE_DEFAULT_RESOLVED,
    payLoad
});
//
// export const CheckMoviesOrGetMovies = () => {
//     return (dispatch) => {
//         let {movies} = store.getState();
//
//                 console.log("CheckMoviesOrGetMovies--store1");
//                 console.log(store.getState());
//                 let state = store.getState();
//                 movies = state.movies;
//                 let nameMovie = decodeURI(window.location.toString()).split("movie#")[1];
//                 nameMovie = nameMovie ? nameMovie : movies.moviesFilter[0].title;
//                 dispatch(getChooseMovieResolved(movies.moviesFilter.find(element => element.title.trim() === nameMovie)));
//     };
// };