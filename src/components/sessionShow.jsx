import React, {useState} from "react";
import {getSessionSpace} from "../actions/ChooseMovie";
import {connect} from "react-redux";
import {MySessionSpace} from "./Modal";


const SessionsToFilm = (props) => {
    const movie = props.movie;
    const {title, _id} = movie;
    const sessions = props.movies.sessions;
    const isLoading = props.movies.isLoading;
    let sessionsToMovie = sessions.filter((itemSession) => {
        return itemSession.movie === _id;
    });

    const [show, toggleShow] = useState(false);
   // const [session, setSession] = useState();

    const handleSelect = e => {
        //setSession(e);
        props.getSessionSpace(e);
        toggleShow(true);
    };
    const handlerClickShow = () => {
        toggleShow(false);
    };
    return (
        <div>
            {show && <MySessionSpace  title={title} handleShow={handlerClickShow}/>}
            {
                isLoading
                    ? <div>Loading</div>
                    : sessionsToMovie.map((item, i) => (
                        <div className="sessions_detail card" id={item._id} key={i} onClick={() => handleSelect(item._id)} >
                            <p>цена {item.costs} грн.</p>
                            <p>начало {item.date}</p>
                            <p>зал {item.room}</p>
                        </div>
                    ))
            }


        </div>

    );
};

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    movies: state.movies,
    moviesFilter: state.moviesFilter,
    chooseMovie: state.chooseMovie,
});
const mapDispatchToProps = {
    getSessionSpace
};
export const
    MySessionShow = connect(
        mapStateToProps,
        mapDispatchToProps
    )(SessionsToFilm);


// <div>
// {
// isLoading
// ? <div>Loading</div>
// :{show && <MySessionSpace  title={title} handleShow={handlerClickShow}/>
// <p>hello</p>
// {sessionsToMovie.map((item, i) => {
// <div className="sessions_detail card" id={item._id} key={i} onClick={handleSelect} >
// <p>цена {item.costs} грн.</p>
// <p>начало {item.date}</p>
// <p>зал {item.room}</p>
// </div>
// {show && <MySessionSpace data={item._id} title={title} handleShow={handlerClickShow}/>}
//
// }
// )}}
//
//
// </div>