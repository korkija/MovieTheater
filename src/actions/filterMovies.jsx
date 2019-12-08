import {
    GET_MOVIES_FILTER_PENDING,
    GET_MOVIES_FILTER_RESOLVED,
    GET_MOVIES_FILTER_REJECTED
} from "../constants";
import {store} from "../store";

const getFilterMoviesPending = () => ({type: GET_MOVIES_FILTER_PENDING});
const getFilterMoviesResolved = (payLoad) => ({
    type: GET_MOVIES_FILTER_RESOLVED,
    payLoad});

export const getFilterMovies = (genreFilter) => {
    return (dispatch) => {
        dispatch(getFilterMoviesPending());
        let {movies} = store.getState();
        if (genreFilter) {
            let arrMovies = movies.movies;
            let results = arrMovies.filter(item => {
                let trash = item.genre.find(
                    item2 => {
                        return item2.trim() === genreFilter
                    });

                return genreFilter === (trash ? trash.trim() : "1");
            });
            dispatch(getFilterMoviesResolved(results));
        }
        else {
            dispatch(getFilterMoviesResolved(movies.movies));
        }


        // dispatch(getFilterMoviesPending());
        // axios.get("URL_MOVIE")
        //     .then(({data}) => {
        //         //history.push("/");
        //         console.log("data.movie");
        //         console.log(data.movie);
        //         dispatch(getFilterMoviesResolved(data.movie));
        //
        //         //console.log(data.movies.movie);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         dispatch(getFilterMoviesRejected());
        //     })
    };
};