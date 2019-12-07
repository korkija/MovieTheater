import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";
import {checkMoviesOrGetMovies} from "../actions/ChooseMovie";
import {connect} from "react-redux";
import {MySmallCard} from "./smallCards";

const {Header} = Layout;

const SessionsToFilm = (props) => {
    const movie = props.movie;
    const {title, poster, _id} = movie;

    const handleSelect = e => {
        console.log('click', e);
    };

    const sessions = props.movies.sessions;
    const rooms = props.movies.rooms;
    const movies = props.movies.movies;
    const isLoading = props.movies.isLoading;
    //const isLoading = this.props.isLoading;
    // defaultSelectedKeys={['1']}
    let sessionsToMovie = sessions.filter((itemSession) => {
        return itemSession.movie === _id;


    });
    console.log(sessionsToMovie);
    //     let trash = item.genre.find(
    //         item2 => {
    //             return item2.trim() === genreFilter
    //         });
    //
    //     return genreFilter === (trash ? trash.trim() : "1");
    // );

    return (
        <div>
            {
                isLoading
                    ? <div>Loading</div>
                    : sessionsToMovie.map((item, i) => (
                        <div className="sessions_detail" key={i}>
                            <p>цена {item.costs} грн.</p>
                            <p>начало {item.date}</p>
                            <p>зал {item.room}</p>
                        </div>
                    ))
            }
        </div>

    );

    //         )
    //         )

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
    )(SessionsToFilm);