// import {
//     GET_MOVIES_FILTER_PENDING,
//     GET_MOVIES_FILTER_RESOLVED,
//     GET_MOVIES_FILTER_REJECTED
// } from "../constants";
//
// const INITIAL_DATA = {
//     isLoading: false,
//     moviesFilter: [],
//     errorMsg: ""
// };
//
// export const moviesFilter = (state = INITIAL_DATA, action) => {
//     switch (action.type) {
//         case GET_MOVIES_FILTER_PENDING: {
//             return {
//                 ...state,
//                 isLoading: true,
//                 errorMsg: ""
//             };
//         }
//
//         case GET_MOVIES_FILTER_RESOLVED: {
//             console.log("test");
//             return {
//                 ...state,
//                 isLoading: false,
//                 moviesFilter: action.payLoad
//             };
//         }
//         case GET_MOVIES_FILTER_REJECTED: {
//             return {
//                 ...state,
//                 isLoading: false,
//                 errorMsg: action.payLoad
//             };
//         }
//         default: {
//             return state;
//         }
//     }
// };
