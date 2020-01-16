import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import {Card} from 'antd';
import {connect} from "react-redux";

class DetailCard extends React.Component {

    //this.props.history.push

    handleShowSessions = () => {
        //<Link to="/sessions"><button onClick={this.handleShowSessions()}>Посмотреть сеансы</button></Link>
        this.props.history.push("/sessions");
    };

    render() {
        const {title, poster, description, country, trailer} = this.props.chooseMovie;
        console.log("this.props.chooseMovie");
        console.log(this.props.chooseMovie);
        const isLoading = this.props.isLoading;
        return (
            isLoading
                ? <div>Loading</div>
                :
                <div className="container card">
                    <h3>{title}</h3>
                <div className="box">

                    <div className="imgDetail">
                        <img className="img" alt={title} src={poster}/>
                    </div>
                    <div className="infoDetail" >

                        <p>{country}</p>
                        <p className="text">{description}</p>
                        <button onClick={this.handleShowSessions}>Посмотреть сеансы</button>
                        <iframe width="100%" height="100%" src={trailer} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                </div>
        )
    };
}

const mapStateToProps = (state) => ({
    isLoading: state.movies.isLoading,
    chooseMovie: state.movies.chooseMovie
});

export const
    MyDetailCard = connect(
        mapStateToProps,
    )(DetailCard);


