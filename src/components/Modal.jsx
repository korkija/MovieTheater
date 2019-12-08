import React from "react";
import ReactDOM from "react-dom";
import {setSessionSpaceEmpty, addTickets} from "../actions/ChooseMovie";
import {connect} from "react-redux";
import {store} from "../store";

class Modal extends React.Component {

    state = store.getState();

    //  const {  movies } = state;

    componentWillMount() {
        this.root = document.createElement("div");
        const body = document.querySelector("body");
        body.appendChild(this.root);
    }

    componentWillUnmount() {
        this.props.setSessionSpaceEmpty();

        this.root.remove();
    }

    handleSelect= (event) =>  {
        const {movies} = store.getState();
        const chosenOrNot = event.target.classList;

        if ([].includes.call(chosenOrNot, 'free')&&!([].includes.call(chosenOrNot, 'choosen-place'))) {
            event.target.classList.add("choosen-place");
            const ticket = movies.sessionSpace.find(item => item._id === event.target.getAttribute("data"));
            this.props.addTickets(ticket);
        }
    };

    render() {
        let {
            movies
        } = this.props;

        console.log(movies);
        movies.sessionSpace.sort(function (a, b) {
            return (a.row - b.row);
        });
        movies.sessionSpace.sort(function (a, b) {
            return (a.row === b.row) && (a.place - b.place);
        });
        const widthSize = movies.sessionSpace.length === 70 ? "seat10x7" : "seat14x10";

        // function handleSelect1(event) {
        //
        //     const chosenOrNot =event.target.classList;
        //
        //     if ([].includes.call(chosenOrNot, 'free')){
        //         event.target.classList.add("choosen-place");
        //         console.log("----------------------------------------------");
        //         console.log();
        //         const ticket = movies.sessionSpace.find(item=> item._id===event.target.getAttribute("data"));
        //         props.addTickets(ticket);
        //     }
        //
        // }

        const checkPlace = movies.sessionSpace.filter((item) => {
            return (item.free);
        });

        let message = checkPlace.length === 0 ? "Мест нет!" : "";
        const handleSelectSame = this.handleSelect;
        return ReactDOM.createPortal(
            <div className="portal-wrapper">
                <div className="modal">
                    <h1>{this.props.title}</h1>
                    <button onClick={this.props.handleShow}>Close</button>
                    <p>{message}</p>
                    <div className="row-place10x7 ">
                        {movies.sessionSpace.map((item) => (
                            <div className={item.free ? widthSize + " free" : widthSize + " taken"}
                                 onClick={item.free && handleSelectSame} data={item._id}
                                 key={item._id}>{item.place}</div>
                        ))

                        }
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
        addTickets
    };
export const
    MySessionSpace = connect(
        mapStateToProps,
        mapDispatchToProps
    )(Modal);