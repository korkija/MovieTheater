import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';

import {connect} from "react-redux";
import {getRooms, getSessions} from "../actions/ChooseMovie";
import {Card} from "antd";

class TicketsList extends React.Component {
    componentDidMount() {

    }

    render() {
        console.log("this.props.tickets");
        console.log(this.props.tickets);

        // const sessions = this.props.movies.sessions;
        // const tickets = this.props.movies.tickets;
        // const movies = this.props.movies;
        // const isLoading = this.props.isLoading;
        return (
            <div>
            <div>ghbdtn</div>
            <div>ghbdtn</div>
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

};
export const MyTicketsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketsList);


// isLoading
//     ? <div>Loading</div>
//     : tickets.map((item, i) => (
//         <div key={i}>
//             <div style={{ background: '#ECECEC', padding: '30px' }}>
//                 <Card title="Card title" bordered={false} style={{ width: 300 }}>
//                     <p>Card content</p>
//                     <p>Card content</p>
//                     <p>Card content</p>
//                 </Card>
//             </div>
//         </div>
//     )
//     )