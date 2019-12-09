import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';

import {connect} from "react-redux";
import {MyTicket} from "../components/Ticket_Detail"
import {deleteTickets} from "../actions/ChooseMovie";
import {store} from "../store";

class TicketsList extends React.Component {
    state = store.getState();

    componentDidMount() {


    }

    getFullInfoList() {
        const state = store.getState();
        const {movies} = state;
        const sessions = movies.sessions;
        const rooms = movies.rooms;
        const moviesFilm = movies.movies;
        const tickets = movies.tickets;
        console.log("=============----tickets---------------------=============")
        console.log(tickets);
        const ticketResultList = tickets.map((item, i) => {
            let fullInfoItem = {...item};
            let sessionInfo = sessions.find(itemSession => itemSession._id === item.session);
            let roomInfo = rooms.find(itemRoom => itemRoom._id === sessionInfo.room);
            let movieInfo = moviesFilm.find(itemFilm => itemFilm._id === sessionInfo.movie);

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
        if (this.state.movies.tickets.length>0) {
            alert("this.props.buyTickets()");
            alert("You WIN!!!");
        }
    };

    render() {
        const state = store.getState();
        const {movies} = state;
        const tickets = this.getFullInfoList();
        const isLoading = movies.isLoading;
        return (
            <div>
                {tickets.length!==0&&(<button  onClick={this.handleBuy}>BUY TICKETS</button>)}
            {isLoading
                ? <div>Loading</div>
                : tickets.map((item, i) => (
                    <div>
                        <div className="line-div" key={i}>
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
    isLoading: state.isLoading,
    movies: state.movies.movies,
    tickets: state.movies.tickets,
    rooms: state.movies.rooms,
    sessions: state.sessions,
    sessionSpace: state.movies.sessionSpace
});
const mapDispatchToProps = {
    deleteTickets
};
export const MyTicketsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketsList);


