import React from "react";
import {connect} from "react-redux";
import {SmallCard} from "../components/smallCards";
import {MyFilterMoviesContainer} from "./DropdownMy";
import {checkMoviesOrGetMovies} from "../actions/ChooseMovie";

class MyMovies extends React.Component {

    render() {
        const handleClickAdd = (movieItem) => {
            this.props.checkMoviesOrGetMovies(movieItem);
        };

        console.log("this.props.moviesFilter");
        console.log(this.props.moviesFilter);

        return (
            <div>
                {
                    this.props.isLoading
                        ? <div>Loading</div>
                        : <div>
                            <MyFilterMoviesContainer/>
                        </div>
                }
                {
                    this.props.isLoading
                        ? <div>Loading</div>
                        : this.props.moviesFilter.map((item, i) => (
                            <div className="small-card" key={i}>
                                <SmallCard movie={item} onClick={handleClickAdd}/>
                            </div>
                        ))
                }
            </div>);
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.movies.isLoading,
    moviesFilter: state.movies.moviesFilter,
});

const mapDispatchToProps = {
    checkMoviesOrGetMovies
};
export const MyMoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyMovies);