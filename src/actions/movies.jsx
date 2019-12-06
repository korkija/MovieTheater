import axios from "axios";
import {store} from "../store";

import {
    GET_MOVIES_PENDING,
    GET_MOVIES_REJECTED,
    GET_MOVIES_RESOLVED,
    URL_MOVIE
} from "../constants";

const getMoviesPending = () => ({type: GET_MOVIES_PENDING});
const getMoviesResolved = (payLoad) => ({
    type: GET_MOVIES_RESOLVED,
    payLoad});
const getMoviesRejected = () => ({
    type: GET_MOVIES_REJECTED,
    payLoad: "Something wrong!"
});

export const getMovies = () => {
    return (dispatch) => {
        dispatch(getMoviesPending());
        axios.get(URL_MOVIE)
            .then(({data}) => {
                dispatch(getMoviesResolved(data.movie));

            })
            .catch((error) => {
                console.log(error);
                dispatch(getMoviesRejected());
            })
    };
};

