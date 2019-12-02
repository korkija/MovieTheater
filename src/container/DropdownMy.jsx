import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../style/index.css';
import {Menu, Dropdown, Button, Icon, message} from 'antd';
import {store} from "../store";
import {Input} from 'antd';
import {getFilterMovies} from "../actions/filterMovies";
import {connect} from "react-redux";

const {Search} = Input;

class DropdownMy extends React.Component {
    componentDidMount() {
        this.props.getFilterMovies();
    }


    //
    // const state = store.getState();
    // const [count, setCount] = useState(0);
    // //const [genres, setGenres] = useState([]);
    // const [posts, setPosts] = useState([]);
    //componentDidMount
    // useEffect(() => {
    //     console.log("state.movies");
    //     console.log(state.movies);
    //     // setGenre(store.movies.map((item,i)=> {
    //     //     item.genre;
    //     // });
    // }, []);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(response => response.json())
    //         .then(json => setPosts(json));
    // }, []);
    //componentDidUpdate
    // useEffect(() => {
    //     console.log('1')
    // });

    // const handleButtonClick = (e) => {
    //     message.info('Click on left button.');
    //     console.log('click left button', e);
    // };
    //
    //





render(){
    let {
        movies,
        genres
    } = this.props;

    const handleSearch = () => {
            console.log("state");
            console.log(movies);
        };

    const handleMenuClick = (e) => {
        let arrMovies = movies.movies;
        const genreFilter = e.item.props.children;
        let results = arrMovies.filter(item => {
            let trash = item.genre.find(
                item2 => {
                    return item2.trim() === genreFilter
                });
            return genreFilter === (trash?trash.trim():"1");
        });
        let buttonchick = document.querySelector(".filter1");
        buttonchick.textContent = genreFilter;

        return results;
    };
    const menu = (
        <Menu onClick={handleMenuClick}>
            {
                genres.map((item, i) =>
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
                    <Button>
                        <span className="filter1">Жанры</span><Icon type="down"/>
                    </Button>
                </Dropdown>
            </div>
            <div className="find-movies">
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    onSearch={handleSearch}
                />
            </div>
        </div>
    );
}
};

const mapStateToProps = (state) => ({
    errorMsg: state.errorMsg,
    isLoading: state.isLoading,
    genres: state.genres,
});

const mapDispatchToProps = {
    getFilterMovies
};
export const MyFilterMoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DropdownMy);
