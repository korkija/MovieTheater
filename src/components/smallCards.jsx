import React, {useState} from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import { Card } from 'antd';
import {Link} from "react-router-dom";
import {checkMoviesOrGetMovies} from "../actions/ChooseMovie";

import {connect} from "react-redux";

const { Meta } = Card;

const SmallCard = (props) => {
        const movie = props.movie;
        const {title, poster} = movie;

        const handleClickAdd = () => {
            props.checkMoviesOrGetMovies(movie);
        };
        const newUrl="/movie/"+title;
        return (
            <Link to={newUrl}>
                <Card
                    hoverable
                    onClick={handleClickAdd}
                    style={{ width: 240 }}
                    cover={<img alt={title} src={poster} />}
                >
                    <Meta title={title} />
                </Card>
            </Link>
        )
};

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    movies: state.movies,
    moviesFilter: state.moviesFilter,
    chooseMovie: state.chooseMovie,
});
const mapDispatchToProps = {
    checkMoviesOrGetMovies
};
export const
    MySmallCard = connect(
        mapStateToProps,
        mapDispatchToProps
    )(SmallCard);

