import React from 'react';
import 'antd/dist/antd.css';
import '../style/index.css';
import {Card} from 'antd';

import {connect} from "react-redux";
import {Link} from "react-router-dom";

class DetailCard extends React.Component {

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
                    <Link to="/sessions"><button>Посмотреть сеансы</button></Link>
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


