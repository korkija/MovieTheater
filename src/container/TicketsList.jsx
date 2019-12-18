import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';

import {connect} from "react-redux";
import {MyTicket} from "../components/Ticket_Detail"
import {deleteTickets, deleteTicketsAll} from "../actions/ChooseMovie";

class TicketsList extends React.Component {

    getFullInfoList() {
        const ticketResultList = this.props.tickets.map((item, i) => {
            let fullInfoItem = {...item};
            let sessionInfo = this.props.sessions.find(itemSession => itemSession._id === item.session);
            let roomInfo = this.props.rooms.find(itemRoom => itemRoom._id === sessionInfo.room);
            let movieInfo = this.props.movies.find(itemFilm => itemFilm._id === sessionInfo.movie);
            fullInfoItem.costs = sessionInfo.costs;
            fullInfoItem.time = sessionInfo.date;
            fullInfoItem.roomID = roomInfo._id;
            fullInfoItem.roomName = roomInfo.name;
            fullInfoItem.movieID = movieInfo._id;
            fullInfoItem.movieName = movieInfo.title;
            return fullInfoItem;
        });
        return ticketResultList;
    }

    handleDelete = (event) => {
        this.props.deleteTickets(event.target.getAttribute("data"));
    };
    handleBuy = () => {
        if (this.props.tickets.length > 0) {
            const tickets = this.getFullInfoList();
            const order = tickets.reduce((accumulator, currentValue) => accumulator + currentValue.costs, 0);
            let name = document.querySelector(".name");
            let mail = document.querySelector(".mail");
            let phone = document.querySelector(".phone");

            if (name.value !== "" && mail.value !== "" && phone.value !== "") {
                this.props.deleteTicketsAll();
                alert("Здесь должен быть запрос в базу данных");
                alert(`${name.value} ты прорвался! С тебя ${order}`);
            } else {
                alert(`еще чуть чуть и Билеты твои!`);
            }
        }
    };

    render() {
        const tickets = this.getFullInfoList();
        return (
            <div>
                {tickets.length !== 0 && (
                    <div>
                        <button onClick={this.handleBuy}>BUY TICKETS</button>
                        <div><b>Name:</b>
                            <input className="name" type="text" size="30"/>
                        </div>
                        <div><b>e-mail:</b>
                            <input className="mail" type="text" size="40"/>
                        </div>
                        <div className="phone"><b>phone:</b>
                            <input className="phone" type="text" size="40"/>
                        </div>
                    </div>)}
                {this.props.isLoading
                    ? <div>Loading</div>
                    : tickets.map((item, i) => (
                            <div key={i}>
                                <div className="line-div" >
                                    <MyTicket data={item}/>
                                </div>
                                <div className="line-div">
                                    <button data={item._id} onClick={(event => this.handleDelete(event))}>Delete</button>
                                </div>
                            </div>
                        )
                    )}
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    isLoading: state.movies.isLoading,
    movies: state.movies.movies,
    tickets: state.movies.tickets,
    rooms: state.movies.rooms,
    sessions: state.movies.sessions,
    //sessionSpace: state.movies.sessionSpace
});
const mapDispatchToProps = {
    deleteTickets,
    deleteTicketsAll
};
export const MyTicketsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketsList);
