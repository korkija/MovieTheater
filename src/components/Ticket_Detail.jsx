import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import {connect} from "react-redux";
import {Card} from "antd";

const Ticket = (props) => {
    const ticketsDetail = props;
    console.log("ticketsDetail-----------------------");
    console.log(ticketsDetail);
   // const {title, _id} = movie;
   //  const sessions = props.movies.sessions;
   //  const isLoading = props.movies.isLoading;
   //  let sessionsToMovie = sessions.filter((itemSession) => {
   //      return itemSession.movie === _id;
   //  });

    const{row,place, costs , time ,roomID, roomName, movieID ,movieName} =ticketsDetail.data;

    // console.log("this.props.tickets");
    // console.log(this.props);

    // const sessions = this.props.movies.sessions;
    // const tickets = this.props.movies.tickets;
    // const movies = this.props.movies;
    // const isLoading = this.props.isLoading;
    return (
        <div style={{ background: '#ECECEC', padding: '5px' }}>
            <Card title={movieName} bordered={true} style={{ width: 300 }}>
                <p>цена {costs}</p>
                <p>зал {roomName} ряд {row} место {place}</p>
                <p>время {time}</p>
            </Card>
        </div>

    );

}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    movies: state.movies.movies,
    tickets: state.movies.tickets,
    rooms: state.movies.rooms,
    sessions: state.sessions,
    sessionSpace: state.movies.sessionSpace
});
const mapDispatchToProps = {

};
export const MyTicket = connect(
    mapStateToProps,
    mapDispatchToProps
)(Ticket);

