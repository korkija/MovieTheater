import React, {useState} from "react";
import {getSessionSpace} from "../actions/ChooseMovie";
import {connect} from "react-redux";
import {MySessionSpace} from "./Modal";

const SessionsToFilm = (props) => {

    let sessionsToMovie = props.sessions.filter((itemSession) => {
        return itemSession.movie === props.movie._id;
    });

    const [show, toggleShow] = useState(false);

    const handleSelect = e => {
        props.getSessionSpace(e);
        toggleShow(true);
    };
    const handlerClickShow = () => {
        toggleShow(false);
    };
    return (
        <div>
            {show && <MySessionSpace  title={props.movie.title} handleShow={handlerClickShow}/>}
            {
                props.isLoading
                    ? <div>Loading</div>
                    : sessionsToMovie.map((item, i) => (
                        <div className="sessions_detail card" id={item._id} key={i} onClick={() => handleSelect(item._id)} >
                            <p>цена {item.costs} грн.</p>
                            <p>начало {item.date}</p>

                        </div>
                    ))
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoading: state.movies.isLoading,
    sessions: state.movies.sessions,
});
const mapDispatchToProps = {
    getSessionSpace
};
export const
    MySessionShow = connect(
        mapStateToProps,
        mapDispatchToProps
    )(SessionsToFilm);
