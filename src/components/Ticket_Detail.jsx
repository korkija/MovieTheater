import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import {connect} from "react-redux";
import {Card} from "antd";

const Ticket = (props) => {
    const ticketsDetail = props;
    const{row,place, costs , time ,roomID, roomName, movieID ,movieName} =ticketsDetail.data;
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

