import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';

import {connect} from "react-redux";
import {getRooms, getSessions} from "../actions/ChooseMovie";
import {Card} from "antd";
import {MySessionShow} from "../components/sessionShow";


class SessionsMovies extends React.Component {
    componentDidMount() {
        console.log("1111111111SessionsMovies omponentDidMount11111111111");
        this.props.getSessions();
        this.props.getRooms();
        console.log(this.props);
    }

    render() {
        const sessions = this.props.sessions;
        const rooms = this.props.rooms;
        const movies = this.props.movies;
        const isLoading = this.props.isLoading;
        return (
            isLoading
                ? <div>Loading</div>
                : movies.map((itemMovie, i) => (
                    <div  key={i}>
                    <div  className="sessions_detail">
                    <Card
                        hoverable
                        title={itemMovie.title}
                        style={{width: 200}}
                        cover={<img alt={itemMovie.title} src={itemMovie.poster}
                        />}
                    >
                        <p>{itemMovie.country}</p>
                        <p>{itemMovie.description}</p>

                    </Card>
                    </div>
                        <div className="sessions_detail">
                            <MySessionShow  movie={itemMovie}/>
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