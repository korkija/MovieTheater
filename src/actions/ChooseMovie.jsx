import {store} from "../store";
import {getMovies} from "./movies";


import {
    GET_CHOOSE_MOVIE_RESOLVED,
    GET_CHOOSE_MOVIE_DEFAULT_RESOLVED,
    GET_SESSIONS_PENDING,
    GET_SESSIONS_RESOLVED,
    GET_SESSIONS_REJECTED,
    GET_MOVIES_REJECTED,
    URL_SESSIONS,
    GET_ROOMS_RESOLVED,
    GET_ROOMS_REJECTED,
    GET_ROOMS_PENDING, URL_ROOMS
} from "../constants";
import axios from "axios";

export const checkMoviesOrGetMovies = (payLoad) => ({
    type: GET_CHOOSE_MOVIE_RESOLVED,
    payLoad
});
export const defaultGetMovies = (payLoad) => ({
    type: GET_CHOOSE_MOVIE_DEFAULT_RESOLVED,
    payLoad
});

const getSessionsPending = () => ({type: GET_SESSIONS_PENDING});
const getSessionsResolved = (payLoad) => ({
    type: GET_SESSIONS_RESOLVED,
    payLoad});
const getSessionsRejected = () => ({
    type: GET_SESSIONS_REJECTED,
    payLoad: "Something wrong!"
});

export const getSessions = () => {
    return (dispatch) => {
        dispatch(getSessionsPending());
        axios.get(URL_SESSIONS)
            .then(({data}) => {
                console.log("------------------getSessions-------------------");
                console.log(data);
                dispatch(getSessionsResolved(data.session));

            })
            .catch((error) => {
                console.log(error);
                dispatch(getSessionsRejected());
            })
    };
};

const getRoomsPending = () => ({type: GET_ROOMS_PENDING});
const getRoomsResolved = (payLoad) => ({
    type: GET_ROOMS_RESOLVED,
    payLoad});
const getRoomsRejected = () => ({
    type: GET_ROOMS_REJECTED,
    payLoad: "Something wrong!"
});

export const getRooms = () => {
    return (dispatch) => {
        dispatch(getRoomsPending());
        axios.get(URL_ROOMS)
            .then(({data}) => {
                console.log("------------------getRooms-------------------");
                console.log(data);
                dispatch(getRoomsResolved(data.rooms));

            })
            .catch((error) => {
                console.log(error);
                dispatch(getRoomsRejected());
            })
    };
};