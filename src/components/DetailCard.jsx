import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import {connect} from "react-redux";

class DetailCard extends React.Component {

    //this.props.history.push

    handleShowSessions = () => {
        //<Link to="/sessions"><button onClick={this.handleShowSessions()}>Посмотреть сеансы</button></Link>
        this.props.history.push("/sessions");
    };

    render() {
        const {title, poster, description, country, trailer} = this.props.chooseMovie;
        console.log("country");
        console.log(country);
        const isLoading = this.props.isLoading;
        return (
            isLoading
                ? <div>Loading</div>
                :
                <div className="container ">
                    <div >
                        <h3>{title}</h3>
                    </div>
                    <div className="box">

                        <div className="imgDetail">
                            <img className="img" alt={title} src={poster}/>
                        </div>
                        <div className="infoDetail">
                            <p>
                           {country.map((item)=>(
                               `${item} `
                            ))}</p>
                            <p className="text">{description}</p>
                            <button className="buttonTop" onClick={this.handleShowSessions}>Посмотреть сеансы</button>
                            <div  className="video">
                                <iframe src={trailer} frameBorder="0" allowFullScreen></iframe>
                            </div>
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


