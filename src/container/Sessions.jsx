import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';

import {connect} from "react-redux";
import {getRooms, getSessions} from "../actions/ChooseMovie";
import {Card} from "antd";
import {MySessionShow} from "../components/sessionShow";
import {store} from "../store";


class SessionsMovies extends React.Component {
    componentDidMount() {
        this.props.getSessions();
        this.props.getRooms();
    }

    render() {
        let moviesShow;
        let {movies} = store.getState();
        if (movies.chooseMovie === {}) {
            moviesShow = movies.movies;
        }
        else {
            moviesShow=[movies.chooseMovie];
        }
        console.log("++++++++++++movies++++++++++++++++++++++++++");

        console.log(movies);
        const isLoading = this.props.isLoading;
        return (
            isLoading
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
    isLoading: state.isLoading,
    movies: state.movies.movies,
    sessions: state.sessions,
    chooseMovie: state.chooseMovie,
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