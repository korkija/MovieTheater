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


export const getSecondFilterMovies = (genreFilter) => {
    return (dispatch) => {
        dispatch(getFilterMoviesPending());
        let {movies} = store.getState();
        if (genreFilter) {

            let arrMovies = movies.moviesFilter;

            if (arrMovies.length===0){
                arrMovies=movies.movies;
            }

            let results = arrMovies.filter(item => {
                const srtSmall = item.title.toLowerCase();
                return srtSmall.indexOf(genreFilter.toLowerCase()) >-1;
                    });
            console.log("results----------------------------");
            console.log(results);
            dispatch(getFilterMoviesResolved(results));
        }
        else {
            dispatch(getFilterMoviesResolved(movies.movies));
        }


    };
};

export const getFilterMovies = (genreFilter) => {
    return (dispatch) => {
        dispatch(getFilterMoviesPending());
        let {movies} = store.getState();
        console.log("genreFilter-------------------------");
        console.log(genreFilter);
       // genreFilter = (genreFilter!=="Все жанры")?true:false;
        if (genreFilter) {
            let arrMovies = movies.movies;
            let results = arrMovies.filter(item => {
                let trash = item.genre.find(
                    item2 => {
                        return item2.trim() === genreFilter
                    });

                return genreFilter === (trash ? trash.trim() : "1");
            });
            if (results.length!==0){
            dispatch(getFilterMoviesResolved(results));
            }
            else {
                dispatch(getFilterMoviesResolved(movies.movies));
            }
        }
        else {
            dispatch(getFilterMoviesResolved(movies.movies));
        }


    };
};