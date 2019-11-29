import React, {useState,useEffect} from "react";
import {
    URL_MOVIE
} from "../constants";


export const MyHooks = () => {

    const [count, setCount] = useState(0);
    const [greeting , setGreeting] = useState("Hello");
    const [arr , setChildren] = useState([]);
    const [posts , setPosts] = useState([]);
    //componentDidMount
    useEffect(() => {
        fetch(URL_MOVIE)
            .then(response => response.json())
            .then(json => setPosts(json));
    }, []);

    //componentDidUpdate
    useEffect(() => {
        console.log('1')
    });


    const handleClickCount = () => {
        setCount(count+1);
    };

    const handleChange = (event) => {
        setGreeting(event.target.value);
    };

    const handleAddChildren = () => {
        setChildren([...arr,"Kate"+arr.length]);
    };


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClickCount}>
                Increase count
            </button>

            <br/>
            <p>Greeting {greeting} </p>
            <input type="text" value={greeting} onChange={handleChange}/>

            <br/>
            <p>Children {arr.map((item,i)=> <span key={i}>{`${item}`}</span>)} </p>
            <button onClick={handleAddChildren}>
                Add child
            </button>

            <br/>
            {
                posts.map((item)=>(
                    <div key={item.id}>{item.title}</div>
                ))
            }
        </div>
    );
};