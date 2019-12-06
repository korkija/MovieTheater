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
        console.log("44444444444444444");
        const sessions = this.props.sessions;
        const rooms = this.props.rooms;
        const movies = this.props.movies;
        const isLoading = this.props.isLoading;
        return (
            isLoading
                ? <div>Loading</div>
                : movies.map((itemMovie) => (
                    <Card
                        hoverable
                        title={itemMovie.title}
                        style={{width: 440}}
                        cover={<img alt={itemMovie.title} src={itemMovie.poster}/>}
                    >
                        <p>{itemMovie.country}</p>
                        <p>{itemMovie.description}</p>
                        <MySessionShow movie={itemMovie}/>
                    </Card>
                )
                )
        );
    };
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    movies: state.movies.movies,
    sessions: state.sessions,
    rooms: state.rooms,
});
const mapDispatchToProps = {
    getSessions,
    getRooms
};
export const MySessions = connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionsMovies);

// {sessions.map((itemSession) => (
//         <div>
//             if (itemSession.movie===itemMovie._id){
//             <p>itemSession.date</p>
//         }
//         </div>
//     )
// )
// }