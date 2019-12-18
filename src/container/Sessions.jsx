import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';

import {connect} from "react-redux";
import {getRooms, getSessions} from "../actions/ChooseMovie";
import {Card} from "antd";
import {MySessionShow} from "../components/sessionShow";


class SessionsMovies extends React.Component {
    componentDidMount() {
        this.props.getSessions();
        this.props.getRooms();
    }

    render() {
        let moviesShow;
        console.log("this.props");
        console.log(this.props);
        if (this.props.chooseMovie === {}) {
            moviesShow = this.props.movies;
        }
        else {
            moviesShow=[this.props.chooseMovie];
        }
        return (
            this.props.isLoading
                ? <div>Loading</div>
                : moviesShow.map((itemMovie, i) => (
                    <div key={i}>
                        <div className="sessions_detail">
                            <Card
                                hoverable
                                title={itemMovie.title}
                                style={{width: 200}}
                                cover={<img alt={itemMovie.title} src={itemMovie.poster}
                                />}
                            >
                                <p>{itemMovie.country}</p>
                            </Card>
                        </div>
                        <div className="sessions_detail">
                            <MySessionShow movie={itemMovie}/>
                        </div>
                    </div>
                )
                )
        );
    };
}

const mapStateToProps = (state) => ({
    isLoading: state.movies.isLoading,
    movies: state.movies.movies,
    chooseMovie: state.movies.chooseMovie,
});
const mapDispatchToProps = {
    getSessions,
    getRooms
};
export const MySessions = connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionsMovies);
