import React, {useState} from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import { Card } from 'antd';
import {Link} from "react-router-dom";
import {checkMoviesOrGetMovies} from "../actions/ChooseMovie";

import {store} from "../store";
import {connect} from "react-redux";

const { Meta } = Card;

export const SmallCard = (props) => {
    //export const SmallCard = ({movie}) => {
        console.log(" фильм для маленькой карты");
        console.log(props);
        const movie = props.movie;
        const {title, poster,createCard} = movie;
        const [showForm, setShowForm] = useState(false);

        const handleClickAdd = () => {
            console.log(`клик по смол кард ${title}`);

            props.checkMoviesOrGetMovies(movie);

            setShowForm(true);
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
    MySmallCard = connect(
        mapStateToProps,
        mapDispatchToProps
    )(SmallCard);

