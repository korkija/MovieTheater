import React from "react";
import {connect} from "react-redux";

import 'antd/dist/antd.css';
import '../style/index.css';
import {Menu, Dropdown, Button, Icon} from 'antd';
import {Input} from 'antd';
import {getFilterMovies, getSecondFilterMovies} from "../actions/filterMovies";
//import {store} from "../store";

const {Search} = Input;

let testGenres;

class DropdownMy extends React.Component {
    // componentDidMount() {
    //     this.props.getFilterMovies(testGenres);
    // }
    // componentWillUpdate() {
    //     this.props.getFilterMovies(testGenres);
    // }

    render() {
        //let {movies,moviesFilter} = store.getState();
        //const genres=this.props.genres;
        const handleSearch = (e) => {
            this.props.getSecondFilterMovies(e.target.value);
        };

        const handleMenuClick = (e) => {
            let textSearch = document.querySelector(".filter2");
            textSearch.querySelector("input").value = "";
            const genreFilter = e.item.props.children;
            let buttonchick = document.querySelector(".filter1");
            buttonchick.textContent = genreFilter;
            testGenres = genreFilter;
            this.props.getFilterMovies(testGenres);
            //this.setState({moviesFilter: [1,2,3,4,5]});
        };
        const menu = (
            <Menu onClick={handleMenuClick}>
                {
                    this.props.genres.map((item, i) =>
                        <Menu.Item key={i}>
                            {item}
                        </Menu.Item>)
                }
            </Menu>
        );
        return (
            <div>
                <div className="find-movies" id="components-dropdown-demo-dropdown-button">
                    <Dropdown overlay={menu}>
                        <Button className="dropdown-my">
                            <span className="filter1">Жанры</span><Icon type="down"/>
                        </Button>
                    </Dropdown>
                </div>
                <div className="find-movies">
                    <Search
                        className="filter2"
                        placeholder="input search text"
                        onInput={handleSearch}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    //isLoading: state.isLoading,
    genres: state.movies.genres
});

const mapDispatchToProps = {
    getFilterMovies,
    getSecondFilterMovies
};
export const MyFilterMoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DropdownMy);
