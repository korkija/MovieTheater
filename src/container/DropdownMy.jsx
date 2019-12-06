import React from "react";
import {connect} from "react-redux";

import 'antd/dist/antd.css';
import '../style/index.css';
import {Menu, Dropdown, Button, Icon} from 'antd';
import {Input} from 'antd';
import {getFilterMovies} from "../actions/filterMovies";
import {store} from "../store";

const {Search} = Input;

let testGenres;
class DropdownMy extends React.Component {
    componentDidMount() {
        this.props.getFilterMovies(testGenres);
    }
    componentWillUpdate() {
        this.props.getFilterMovies(testGenres);
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
    let {movies,moviesFilter} = store.getState();
    const genres=movies.genres;

    const handleSearch = () => {
            console.log("movies");
            console.log(movies);
        };

    const handleMenuClick = (e) => {
        const genreFilter = e.item.props.children;
        let buttonchick = document.querySelector(".filter1");
        buttonchick.textContent = genreFilter;
        testGenres=genreFilter;
        console.log("test!!!!!");
        this.setState({moviesFilter: [1,2,3,4,5]});
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
                    <Button className="dropdown-my">
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
}

const mapStateToProps = (state) => ({
    errorMsg: state.errorMsg,
    isLoading: state.isLoading,
    genres: state.genres
});

const mapDispatchToProps  = {
    getFilterMovies
};
export const MyFilterMoviesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DropdownMy);
