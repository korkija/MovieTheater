import thunk from "redux-thunk";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {movies} from "./reducers/movies";
import {space} from "./reducers/space";
import {moviesFilter} from "./reducers/filterMovies"

// Combine Reducers
const reducers = combineReducers({movies,space,moviesFilter});

export const store = createStore(reducers, applyMiddleware(thunk));
//export const store = createStore(movies, applyMiddleware(thunk));
// export const store = createStore(combineReducers({
//     movies: movies,
//     space: space}),
//     applyMiddleware(thunk));