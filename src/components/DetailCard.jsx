import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import {Card} from 'antd';

import {checkMoviesOrGetMovies} from "../actions/ChooseMovie";
import {connect} from "react-redux";

class DetailCard extends React.Component {

    render() {
        let {
            movies,
        } = this.props;
        let {title, poster, description, country} = movies.chooseMovie;
        const isLoading = movies.isLoading;
        return (
            isLoading
                ? <div>Loading</div>
                : <Card
                    hoverable
                    title={title}

                    style={{width: 440}}
                    cover={<img alt={title} src={poster}/>}
                >
                    <p>{country}</p>
                    <p>{description}</p>
                </Card>
        )
    };
}

const mapStateToProps = (state) => ({
   // errorMsg: state.errorMsg,
    isLoading: state.isLoading,
    movies: state.movies,
    moviesFilter: state.moviesFilter,
    chooseMovie: state.chooseMovie,
});
const mapDispatchToProps = {
   // getMovies,
    checkMoviesOrGetMovies
};
export const
    MyDetailCard = connect(
        mapStateToProps,
        mapDispatchToProps
    )(DetailCard);


