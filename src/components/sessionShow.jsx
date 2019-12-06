import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";
import {checkMoviesOrGetMovies} from "../actions/ChooseMovie";
import {connect} from "react-redux";

const {Header} = Layout;

const SmallCard = (props) => {
    const movie = props.movie;
    const {title, poster} = movie;
    const handleSelect = e => {
        console.log('click', e);
    };


        const sessions = this.props.sessions;
        const rooms = this.props.rooms;
        const movies = this.props.movies;
        //const isLoading = this.props.isLoading;
        // defaultSelectedKeys={['1']}
        return (
            sessions.map((itemSession) => (

            )
            )
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
    MySessionShow = connect(
        mapStateToProps,
        mapDispatchToProps
    )(sessionShow);