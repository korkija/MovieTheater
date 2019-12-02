import {
    GET_MOVIES_PENDING,
    GET_MOVIES_REJECTED,
    GET_MOVIES_RESOLVED
} from "../constants";

const INITIAL_DATA = {
    isLoading: false,
    movies: [],
    moviesFilter: [],
    errorMsg: ""
};

function genresToState (moviesList) {
    let arr=[];
    for (let i = 0; i < moviesList.length; i++) {
        let generaItem = moviesList[i].genre.map((item) => item.trim());
        arr = [...new Set([...arr, ...generaItem])];
    }
    let index = arr.indexOf("");
    if (index !== -1) arr.splice(index, 1);
    return arr;
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

        case GET_MOVIES_RESOLVED: {
            console.log("test");
            return {
                ...state,
                isLoading: false,
                movies: action.payLoad,
                moviesFilter: action.payLoad,
                genres: genresToState(action.payLoad)
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
