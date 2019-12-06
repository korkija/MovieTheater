import {
    GET_MOVIES_PENDING,
    GET_MOVIES_REJECTED,
    GET_MOVIES_RESOLVED,
    GET_CHOOSE_MOVIE_RESOLVED,
    GET_MOVIES_FILTER_RESOLVED,
    GET_MOVIES_FILTER_REJECTED
} from "../constants";
import {store} from "../store";

const INITIAL_DATA = {
    isLoading: false,
    movies: [],
    moviesFilter: [],
    chooseMovie: {},
    genres: [],
    errorMsg: ""
};

function genresToState(moviesList) {
    let arr = [];
    for (let i = 0; i < moviesList.length; i++) {
        let generaItem = moviesList[i].genre.map((item) => item.trim());
        arr = [...new Set([...arr, ...generaItem])];
    }
    let index = arr.indexOf("");
    if (index !== -1) arr.splice(index, 1);
    return arr;
}

function chooseMovie(movies) {
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
            console.log("test GET_MOVIES_FILTER_RESOLVED");
            return {
                ...state,
                isLoading: false,
                moviesFilter: action.payLoad
            };
        }
        case GET_CHOOSE_MOVIE_RESOLVED: {
            console.log("action.payLoad  GET_CHOOSE_MOVIE_RESOLVED");
            console.log(action.payLoad);
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
                chooseMovie: chooseMovie(action.payLoad)
            };
        }
        case GET_MOVIES_REJECTED: {
            return {
                ...state,
                isLoading: false,
                errorMsg: action.payLoad
            };
        }
        default: {
            return state;
        }
    }
};
