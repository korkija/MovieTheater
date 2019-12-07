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
    GET_ROOMS_PENDING,
    URL_ROOMS,
    GET_SESSION_SPACE_RESOLVED,
    GET_SESSION_SPACE_REJECTED,
    GET_SESSION_SPACE_PENDING,
    URL_SESSION_SPACE
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
    payLoad
});
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
    payLoad
});
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


const getSessionSpacePending = () => ({type: GET_SESSION_SPACE_PENDING});
const getSessionSpaceResolved = (payLoad) => ({
    type: GET_SESSION_SPACE_RESOLVED,
    payLoad
});
const getSessionSpaceRejected = () => ({
    type: GET_SESSION_SPACE_REJECTED,
    payLoad: "Something wrong!"
});

export const getSessionSpace = (payload) => {
    return (dispatch) => {
        dispatch(getSessionSpacePending());
        console.log("URL_SESSION_SPACE+ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
        console.log(URL_SESSION_SPACE+"?session="+payload);
        axios.get(URL_SESSION_SPACE+"?session="+payload)
            .then(({data}) => {
                console.log(URL_SESSION_SPACE+"?session="+payload);
                console.log("------------------getSessions-------------------");
                console.log(data);
                dispatch(getSessionSpaceResolved(data.space));

            })
            .catch((error) => {
                console.log(error);
                dispatch(getSessionSpaceRejected());
            })
    };
};
