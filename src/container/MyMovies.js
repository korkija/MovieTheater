import React from "react";
import {connect} from "react-redux";
import {getMovies} from "../actions/movies";
import {SmallCard} from "../components/smallCards";

class MyMovies extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.getMovies();
    }

    render() {
        const {
            isLoading,
            movies
        } = this.props;
   
        return (
            <div>
                {
                    isLoading && (movies.movies.length > 0)
                        ? <div>Loading</div>
                        : movies.movies.map((item, i) => (
                            <div className="small-card" key={i}>
                                <SmallCard title={item.title} poster={item.poster}/>
                            </div>
                        ))
                }
            </div>);
    }
}

const mapStateToProps = (state) => ({
    errorMsg: state.errorMsg,
    isLoading: state.isLoading,
    movies: state.movies
});

const mapDispatchToProps = {
    getMovies
};
export const MyMoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyMovies);