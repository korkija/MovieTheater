import React from 'react';
import {connect} from "react-redux";
import {Router} from "react-router-dom";
import {Layout, Breadcrumb} from 'antd';
import {createBrowserHistory} from "history";
import {HeaderMy} from "../components/HeaderMy";
import {Main} from "../routs/index";

import '../style/App.css';
import 'antd/dist/antd.css';
import '../style/index.css';
import {getMovies} from "../actions/movies";
import {defaultGetMovies} from "../actions/ChooseMovie";

const {Content, Footer} = Layout;

export const history = createBrowserHistory();

class App extends React.Component {
    componentDidMount() {
        this.props.getMovies();
        this.props.defaultGetMovies();
    }

    render() {

        return (
                <Layout>
                    <Router history={history}>
                    <HeaderMy/>
                    <Content style={{padding: '0 50px', marginTop: 64}}>

                        <div style={{background: '#eee', padding: 24, minHeight: 380}}>
                                <Main/>
                        </div>
                    </Content>
                    </Router>
                    <Footer>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
        );
    }
}
//export default App;

const mapStateToProps = (state) => ({
    errorMsg: state.errorMsg,
    isLoading: state.isLoading,
    movies: state.movies,
    //moviesFilter: state.moviesFilter,
});

const mapDispatchToProps = {
    getMovies,
    defaultGetMovies
};
export const MyApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);