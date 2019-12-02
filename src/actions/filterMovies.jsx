import axios from "axios";

import {
    GET_MOVIES_FILTER_PENDING,
    GET_MOVIES_FILTER_RESOLVED,
    GET_MOVIES_FILTER_REJECTED
} from "../constants";

const getFilterMoviesPending = () => ({type: GET_MOVIES_FILTER_PENDING});
const getFilterMoviesResolved = (payLoad) => ({
    type: GET_MOVIES_FILTER_RESOLVED,
    payLoad});
const getFilterMoviesRejected = () => ({
    type: GET_MOVIES_FILTER_REJECTED,
    payLoad: "Something wrong!"
});

export const getFilterMovies = () => {
    return (dispatch) => {
        // dispatch(getFilterMoviesPending());
        // axios.get(URL_MOVIE)
        //     .then(({data}) => {
        //         //history.push("/");
        //         console.log("data.movie");
        //         console.log(data.movie);
        //         dispatch(getFilterMoviesResolved(data.movie));
        //
        //         //console.log(data.movies.movie);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         dispatch(getFilterMoviesRejected());
        //     })
    };
};