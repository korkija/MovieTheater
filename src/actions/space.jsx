import axios from "axios";

import {history} from "../index"

import {
    GET_MOVIES_SPACE_PENDING ,
    GET_MOVIES_SPACE_RESOLVED ,
    GET_MOVIES_SPACE_REJECTED ,
    URL_MOVIE_SPACE
} from "../constants";

const getMoviesSpacePending = () => ({type: GET_MOVIES_SPACE_PENDING});
const getMoviesSpaceResolved = (payLoad) => ({
    type: GET_MOVIES_SPACE_RESOLVED,
    payLoad});
const getMoviesSpaceRejected = () => ({
    type: GET_MOVIES_SPACE_REJECTED,
    payLoad: "Something wrong!"
});

export const getMoviesSpace = () => {
    return (dispatch) => {
        dispatch(getMoviesSpacePending());
        axios.get(URL_MOVIE_SPACE)
            .then(({data}) => {
                //history.push("/");
                dispatch(getMoviesSpaceResolved(data.session));

                console.log(data.session);
            })
            .catch((error) => {
                console.log(error);
                dispatch(getMoviesSpaceRejected());
            })
    };
};