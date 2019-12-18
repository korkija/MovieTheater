import React from "react";
import ReactDOM from "react-dom";
import {setSessionSpaceEmpty, addTickets, deleteTickets} from "../actions/ChooseMovie";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Modal extends React.Component {

    componentWillMount() {
        this.root = document.createElement("div");
        const body = document.querySelector("body");
        body.appendChild(this.root);
    }

    componentWillUnmount() {
        this.props.setSessionSpaceEmpty();
        this.root.remove();
    }

    handleSelect = (event) => {
        const chosenOrNot = event.target.classList;
        if ([].includes.call(chosenOrNot, 'free') && !([].includes.call(chosenOrNot, 'choosen-place'))) {
            event.target.classList.add("choosen-place");
            const ticket = this.props.sessionSpace.find(item => item._id === event.target.getAttribute("data"));
            this.props.addTickets(ticket);
        } else {
            if ([].includes.call(chosenOrNot, 'choosen-place')) {
                event.target.classList.remove("choosen-place");
                this.props.deleteTickets(event.target.getAttribute("data"));
            }
        }
    };

    render() {
        this.props.sessionSpace.sort(function (a, b) {
            return (a.row - b.row);
        });
        this.props.sessionSpace.sort(function (a, b) {
            return (a.row === b.row) && (a.place - b.place);
        });
        const widthSize = this.props.sessionSpace.length === 70 ? "seat10x7" : "seat14x10";
        const checkPlace = this.props.sessionSpace.filter((item) => {
            return (item.free);
        });
        const flagShow = checkPlace.length === 0;
        let message = checkPlace.length === 0 ? "Мест нет!" : "";
        const handleSelectSame = this.handleSelect;

        return ReactDOM.createPortal(
            <div>
                <div className=" portal-wrapper">
                    <div className="modal ">
                        <div className="line-div"><h2>{this.props.title}</h2></div>
                        <div className="line-div">
                            <p>
                                <button onClick={this.props.handleShow}>Close</button>
                            </p>
                        </div>

                        {!flagShow && (<div className="line-div"><p> {message}</p></div>)}

                        {this.props.tickets.length !== 0 && (
                            <div className="line-div order"><p>забронированно билетов: {this.props.tickets.length} </p>
                            </div>)}
                        {this.props.tickets.length !== 0 && (<div className="line-div order"><Link to="/buy">
                            <button>Buy</button>
                        </Link></div>)}

                        <div className="row-place10x7 ">
                            {this.props.sessionSpace.map((item) => (
                                !item.free
                                    ?<div className={widthSize + " free"} onClick={handleSelectSame} data={item._id} key={item._id}>{item.place}</div>
                                    :<div className={widthSize + " taken"} data={item._id} key={item._id}>{item.place}</div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>,
            this.root
        )
    }
}


const
    mapStateToProps = (state) => ({
        tickets: state.movies.tickets,
        sessionSpace: state.movies.sessionSpace,
    });
const
    mapDispatchToProps = {
        setSessionSpaceEmpty,
        addTickets,
        deleteTickets
    };
export const
    MySessionSpace = connect(
        mapStateToProps,
        mapDispatchToProps
    )(Modal);