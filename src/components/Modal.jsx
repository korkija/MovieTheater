import React from "react";
import ReactDOM from "react-dom";
import {setSessionSpaceEmpty, addTickets, deleteTickets} from "../actions/ChooseMovie";
import {connect} from "react-redux";
import {store} from "../store";
import {Link} from "react-router-dom";

class Modal extends React.Component {

    state = store.getState();

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
        const {movies} = store.getState();
        const chosenOrNot = event.target.classList;

        if ([].includes.call(chosenOrNot, 'free') && !([].includes.call(chosenOrNot, 'choosen-place'))) {
            event.target.classList.add("choosen-place");
            const ticket = movies.sessionSpace.find(item => item._id === event.target.getAttribute("data"));
            this.props.addTickets(ticket);
        }
        else {
            if ([].includes.call(chosenOrNot, 'choosen-place')){
                event.target.classList.remove("choosen-place");
                this.props.deleteTickets(event.target.getAttribute("data"));
            }
        }

    };

    render() {
        let {
            movies
        } = this.props;

        movies.sessionSpace.sort(function (a, b) {
            return (a.row - b.row);
        });
        movies.sessionSpace.sort(function (a, b) {
            return (a.row === b.row) && (a.place - b.place);
        });
        const widthSize = movies.sessionSpace.length === 70 ? "seat10x7" : "seat14x10";
        const checkPlace = movies.sessionSpace.filter((item) => {
            return (item.free);
        });
        const flagShow = checkPlace.length === 0 ? true :  false;
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

                        {!flagShow&&(<div className="line-div"><p> {message}</p></div>)}

                        {movies.tickets.length!==0&&(<div className="line-div order"><p>забронированно билетов: {movies.tickets.length} </p></div>)}
                        {movies.tickets.length!==0&&(<div className="line-div order"><Link to="/buy"><button>Buy</button></Link></div>)}

                        <div className="row-place10x7 ">
                            {movies.sessionSpace.map((item) => (
                                <div className={!item.free ? widthSize + " free" : widthSize + " taken"}
                                     onClick={!item.free && handleSelectSame} data={item._id}
                                     key={item._id}>{item.place}</div>
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
        isLoading: state.isLoading,
        movies: state.movies,
        tickets: state.tickets,
        sessionSpace: state.moviesFilter,
        chooseMovie: state.chooseMovie,
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