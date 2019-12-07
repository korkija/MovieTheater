import React from "react";
import ReactDOM from "react-dom";
import {getSessionSpace} from "../actions/ChooseMovie";
import {connect} from "react-redux";

class Modal extends React.Component {


    componentWillMount() {
        this.root = document.createElement("div");
        const body = document.querySelector("body");
        body.appendChild(this.root);
    }

    componentWillUnmount() {
        this.root.remove();
    }

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
        console.log("this.sessionSpacesessionSpace############################################");
        console.log(movies.sessionSpace);

        return ReactDOM.createPortal(
            <div className="portal-wrapper">
                <div className="modal">
                    <h1>{this.props.title}</h1>
                    <button onClick={this.props.handleShow}>Close</button>
                    <div className="row-place10x7 ">
                        {movies.sessionSpace.map((item, i) => (
                            <div className="seat" key={i}>{item.place}</div>
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
        sessionSpace: state.moviesFilter,
        chooseMovie: state.chooseMovie,
    });
const
    mapDispatchToProps = {
        getSessionSpace
    };
export const
    MySessionSpace = connect(
        mapStateToProps,
        mapDispatchToProps
    )(Modal);