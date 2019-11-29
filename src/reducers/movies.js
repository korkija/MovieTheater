import {
    GET_MOVIES_PENDING,
    GET_MOVIES_REJECTED,
    GET_MOVIES_RESOLVED
} from "../constants";

const INITIAL_DATA = {
    isLoading: false,
    movies: [],
    errorMsg: ""
};

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
            return {
                ...state,
                isLoading: false,
                movies: action.payLoad
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
