import {
    GET_MOVIES_SPACE_PENDING ,
    GET_MOVIES_SPACE_RESOLVED ,
    GET_MOVIES_SPACE_REJECTED ,
} from "../constants";

const INITIAL_DATA = {
    isLoading: false,
    space: [],
    errorMsg: ""
};

export const space = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case GET_MOVIES_SPACE_PENDING: {
            return {
                ...state,
                isLoading: true,
                errorMsg: ""
            };
        }
        case GET_MOVIES_SPACE_RESOLVED: {
            return {
                ...state,
                isLoading: false,
                movies: action.payLoad
            };
        }
        case GET_MOVIES_SPACE_REJECTED: {
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
