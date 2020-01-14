import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import {Card} from 'antd';
import {connect} from "react-redux";

class DetailCard extends React.Component {

    //this.props.history.push

    handleShowSessions = () => {
        console.log("try history");
        console.log(this.props);
        console.log(this.props.history);
        //<Link to="/sessions"><button onClick={this.handleShowSessions()}>Посмотреть сеансы</button></Link>
        this.props.history.push("/sessions");
    };

    render() {
        const {title, poster, description, country} = this.props.chooseMovie;
        const isLoading = this.props.isLoading;
        return (
            isLoading
                ? <div>Loading</div>
                : <Card
                    hoverable
                    title={title}

                    style={{width: 440}}
                    cover={<img alt={title} src={poster}/>}
                >
                    <button onClick={this.handleShowSessions}>Посмотреть сеансы</button>
                    <p>{country}</p>
                    <p>{description}</p>

                </Card>
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


