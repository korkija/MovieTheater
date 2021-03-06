import {
    GET_MOVIES_PENDING,
    GET_MOVIES_REJECTED,
    GET_MOVIES_RESOLVED,
    GET_CHOOSE_MOVIE_RESOLVED,
    GET_MOVIES_FILTER_RESOLVED,
    GET_SESSIONS_REJECTED,
    GET_SESSIONS_PENDING,
    GET_SESSIONS_RESOLVED,
    GET_ROOMS_RESOLVED,
    GET_ROOMS_REJECTED,
    GET_ROOMS_PENDING,
    GET_SESSION_SPACE_RESOLVED,
    GET_SESSION_SPACE_PENDING,
    GET_SESSION_SPACE_REJECTED, SET_SESSION_SPACE_EMPTY, SET_NEW_TICKET, SET_DELETE_TICKET, SET_DELETE_TICKET_ALL
} from "../constants";

const INITIAL_DATA = {
    isLoading: false,
    isLoadingSessions: false,
    isLoadingSessionsSpace: false,
    movies: [],
    moviesFilter: [],
    chooseMovie: {},
    genres: [],
    errorMsg: "",
    sessions: [],
    rooms: [],
    sessionSpace: [],
    tickets: []
};

function genresToState(moviesList) {
    let arr = ["Все жанры"];
    for (let i = 0; i < moviesList.length; i++) {
        let generaItem = moviesList[i].genre.map((item) => item.trim());
        arr = [...new Set([...arr, ...generaItem])];
    }
    let index = arr.indexOf("");
    if (index !== -1) arr.splice(index, 1);
    return arr;
}

function chooseMovieFunc(movies) {
    let nameMovie = decodeURI(window.location.toString()).split("movie/")[1];
    nameMovie = nameMovie ? nameMovie : movies[0].title;
    return movies.find(element => element.title.trim() === nameMovie);
}


export const movies = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case GET_MOVIES_PENDING: {
            return {
                ...state,
                isLoading: true,
                errorMsg: ""
            };
        }

        case GET_MOVIES_FILTER_RESOLVED: {
            // console.log("test GET_MOVIES_FILTER_RESOLVED");
            return {
                ...state,
                isLoading: false,
                moviesFilter: action.payLoad
            };
        }
        case GET_CHOOSE_MOVIE_RESOLVED: {
            // console.log("action.payLoad  GET_CHOOSE_MOVIE_RESOLVED");
            // console.log(action.payLoad);
            return {
                ...state,
                isLoading: false,
                chooseMovie: action.payLoad
            };
        }

        case GET_MOVIES_RESOLVED: {
            return {
                ...state,
                isLoading: false,
                movies: action.payLoad,
                moviesFilter: action.payLoad,
                genres: genresToState(action.payLoad),
                chooseMovie: chooseMovieFunc(action.payLoad)
            };
        }
        case GET_MOVIES_REJECTED: {
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payLoad
            };
        }
        case GET_SESSIONS_PENDING: {
            return {
                ...state,
                isLoadingSessions: true,
                errorMsg: ""
            };
        }
        case GET_SESSIONS_REJECTED: {
            return {
                ...state,
                isLoadingSessions: false,
                errorMsg: action.payLoad
            };
        }
        case GET_SESSIONS_RESOLVED: {
            // console.log("action.payLoad  GET_SESSIONS");
            // console.log(action.payLoad);
            return {
                ...state,
                isLoadingSessions: false,
                sessions: action.payLoad
            };
        }
        case GET_SESSION_SPACE_PENDING: {
            console.log("test GET_SESSION_SPACE_PENDING", state.isLoading);
            return {
                ...state,
                isLoadingSessionsSpace: true,
                errorMsg: ""
            };
        }
        case GET_SESSION_SPACE_REJECTED: {
            console.log("test GET_SESSION_SPACE_REJECTED");
            return {
                ...state,
                isLoadingSessionsSpace: false,
                errorMsg: action.payLoad
            };
        }
        case SET_SESSION_SPACE_EMPTY: {
            console.log("test SET_SESSION_SPACE_EMPTY", action.payLoad);
            return {
                ...state,
                isLoadingSessionsSpace: false,
                sessionSpace: action.payLoad
            };
        }
        case GET_SESSION_SPACE_RESOLVED: {
            console.log("test GET_SESSION_SPACE_RESOLVED ", state.isLoading);
            return {
                ...state,
                isLoadingSessionsSpace: false,
                sessionSpace: action.payLoad
            };
        }
        case GET_ROOMS_PENDING: {
            return {
                ...state,
                isLoading: true,
                errorMsg: ""
            };
        }
        case GET_ROOMS_REJECTED: {
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payLoad
            };
        }
        case GET_ROOMS_RESOLVED: {
            // console.log("action.payLoad  GET_ROOMS");
            // console.log(action.payLoad);
            return {
                ...state,
                isLoading: false,
                rooms: action.payLoad
            };
        }
        case SET_NEW_TICKET: {
            return {
                ...state,
                tickets: [...state.tickets, action.payLoad]
            };
        }
        case SET_DELETE_TICKET: {
            console.log("=============-------------------------=============action.payLoad");
            console.log(state.tickets[0]._id);
            console.log(action.payLoad);
            console.log(state.tickets.indexOf(  state.tickets.find((item) => item._id===action.payLoad )));
            return {
                ...state,
                tickets: (() => {
                    state.tickets.splice(state.tickets.indexOf(  state.tickets.find((item) => item._id===action.payLoad )), 1);
                    return state.tickets
                })()
            };
        }
        case SET_DELETE_TICKET_ALL: {
            return {
                ...state,
                tickets: []
            };
        }
        default: {
            return state;
        }
    }
};
