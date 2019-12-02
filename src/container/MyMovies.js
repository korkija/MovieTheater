import React from "react";
import {connect} from "react-redux";
import {getMovies} from "../actions/movies";
import {SmallCard} from "../components/smallCards";
import { MyFilterMoviesContainer } from "./DropdownMy";

class MyMovies extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        let {
            isLoading,
            movies,
        } = this.props;

        // const genr = ()=> {
        //     let arr=[];
        //     for (let i = 0; i < movies.moviesFilter.length; i++) {
        //         let generaItem = movies.moviesFilter[i].genre.map((item) => item.trim());
        //         arr = [...new Set([...arr, ...generaItem])];
        //     }
        //     let index = arr.indexOf("");
        //     if (index !== -1) arr.splice(index, 1);
        //     return arr;
        // };
        //
        // const genres = genr();
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
    movies: state.movies,
    moviesFilter: state.moviesFilter,
});

const mapDispatchToProps = {
    getMovies
};
export const MyMoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyMovies);