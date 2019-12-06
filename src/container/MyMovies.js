import React from "react";
import {connect} from "react-redux";
import {getMovies} from "../actions/movies";
import {MySmallCard} from "../components/smallCards";
import {MyFilterMoviesContainer} from "./DropdownMy";

class MyMovies extends React.Component {
    // componentDidMount() {
    //     this.props.getMovies();
    // }

    render() {
        let {
            movies,
        } = this.props;
        const isLoading = movies.isLoading;
        return (
            <div>
                {
                    isLoading
                        ? <div>Loading</div>
                        : <div>
                            <MyFilterMoviesContainer/>
                        </div>
                }
                {
                    isLoading
                        ? <div>Loading</div>
                        : movies.moviesFilter.map((item, i) => (
                            <div className="small-card" key={i}>
                                <MySmallCard movie={item} />
                            </div>
                        ))
                }
            </div>);
    }
}

const mapStateToProps = (state) => ({
    errorMsg: state.errorMsg,
    isLoading: state.isLoading,
    movies: state.movies,
    //moviesFilter: state.moviesFilter,
});

// const mapDispatchToProps = {
//     getMovies
// };
export const MyMoviesContainer = connect(
    mapStateToProps,
   // mapDispatchToProps
)(MyMovies);