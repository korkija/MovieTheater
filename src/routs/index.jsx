import React from "react";
import {Route, Switch} from "react-router-dom";
//import {MyMoviesContainer} from "../container/MyMovies";
//import {Header} from "../components/HeaderMy";
//import {Greeting} from "../components/greeting";
import { ButtonCounter } from "../components/ButtonCounter";//                 ../components/ButtonCounter";

export const Main = () => {
    return (
        <div>
            {/*<Header/>*/}
            <Switch>
                <Route path="/" exact component={ButtonCounter}/>
                <Route path="/movies" component={ButtonCounter}/>
                <Route path="/form" component={ButtonCounter}/>
            </Switch>
        </div>

    );
};