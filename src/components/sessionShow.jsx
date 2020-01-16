import React, {useState} from "react";
import {getSessionSpace} from "../actions/ChooseMovie";
import { useDispatch, useSelector} from "react-redux";
import {MySessionSpace} from "./Modal";

export const SessionsToFilm = (props) => {

    const sessions = useSelector(state => state.movies.sessions);
    const isLoadingSessions = useSelector(state => state.movies.isLoadingSessions);
    const dispatch = useDispatch();

    let sessionsToMovie = sessions.filter((itemSession) => {
        return itemSession.movie === props.movie._id;
    });
    const [show, toggleShow] = useState(false);
    const handleSelect = e => {
        dispatch(getSessionSpace(e));
        toggleShow(!show);
    };
    const handlerClickShow = () => {

        toggleShow(!show);
    };
    let formatterData = new Intl.DateTimeFormat("ru", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    let formatterTime = new Intl.DateTimeFormat("ru", {
        hour: 'numeric',
        minute: 'numeric'
    });
    return (
        <div>
            {show && <MySessionSpace  title={props.movie.title} handleShow={handlerClickShow}/>}
            {
                isLoadingSessions
                    ? <div>Loading</div>
                    : sessionsToMovie.map((item, i) => (
                        <div className="sessions_detail card" id={item._id} key={i} onClick={() => handleSelect(item._id)} >
                            <p>цена: {item.costs} грн.</p>
                            <p>начало: {formatterTime.format(new Date(item.date))}</p>
                            <p>{formatterData.format(new Date(item.date))}</p>
                        </div>
                    ))
            }
        </div>
    );
};
