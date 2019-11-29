import React from "react";
import {Route, Switch} from "react-router-dom";
//import {MyMoviesContainer} from "../container/container";
//import {Header} from "../components/HeaderMy";
//import {Greeting} from "../components/greeting";
import { ButtonCounter } from "../components/ButtonCounter";//                 ../components/ButtonCounter";
import { Hello } from "../components/Hello";
import { Button } from "../components/Button";
import {MyMoviesContainer} from "../container/MyMovies";



export const Main = () => {
    return (
        <div>
            {/*<Header/>*/}
            <Switch>
                <Route path="/" exact component={MyMoviesContainer}/>
                <Route path="/hello" component={Hello}/>
                <Route path="/button" component={Button}/>
            </Switch>
        </div>

    );
};