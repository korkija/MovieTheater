import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";
import {checkMoviesOrGetMovies} from "../actions/ChooseMovie";
import {connect} from "react-redux";

const {Header} = Layout;

export class HeaderMy extends Component {

    constructor() {
        super();
        this.activUrl="1";
    }
    componentDidMount() {
        const url = window.location.toString();
        if (url.indexOf("movie")>-1) {
            this.activUrl="2";
        }
        if (url.indexOf("sessions")>-1) {
            this.activUrl="3";
        }
        if (url.indexOf("buy")>-1) {
            this.activUrl="4";
        }
    }

    handleSelect = e => {
        console.log('click', e);
    };

    render() {
        // defaultSelectedKeys={['1']}
        return (
            <Header>
                <div className="logo"/>
                <Menu
                    onSelect={this.handleSelect}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={this.activUrl}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/movie">Movie</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/sessions">Sessions</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/buy">Buy tickets</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    movies: state.movies,
    moviesFilter: state.moviesFilter,
    chooseMovie: state.chooseMovie,
});
const mapDispatchToProps = {
    checkMoviesOrGetMovies
};
export const
    MyHeaderMy = connect(
        mapStateToProps,
        mapDispatchToProps
    )(HeaderMy);








