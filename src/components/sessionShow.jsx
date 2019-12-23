import React, {useState} from "react";
import {getSessionSpace} from "../actions/ChooseMovie";
import {connect, useDispatch, useSelector} from "react-redux";
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
        console.log("props");
        console.log(props);
        dispatch(getSessionSpace(e));
        toggleShow(!show);
    };
    const handlerClickShow = () => {

        toggleShow(!show);
    };
    console.log("show");
    console.log(show);

    return (
        <div>
            {show && <MySessionSpace  title={props.movie.title} handleShow={handlerClickShow}/>}
            {
                isLoadingSessions
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
//
// const mapStateToProps = (state) => {
//     return {
//     // isLoading: state.movies.isLoading,
//     // sessions: state.movies.sessions
// }};
// const mapDispatchToProps = {
//     getSessionSpace
// };
// export const
//     MySessionShow = connect(
//         mapStateToProps,
//         mapDispatchToProps
//     )(SessionsToFilm);
