import React from "react";
import {Route, Switch} from "react-router-dom";
//import {MyMoviesContainer} from "../container/container";
//import {Header} from "../components/HeaderMy";
//import {Greeting} from "../components/greeting";
import { ButtonCounter } from "../components/ButtonCounter";//                 ../components/ButtonCounter";
import {SmallCard} from "../components/smallCards";
import { Button } from "../components/Button";
import {MyMoviesContainer} from "../container/MyMovies";

export const Main = () => {
    return (
        <div>
            {/*<Header/>*/}
            <Switch>
                <Route path="/" exact component={MyMoviesContainer}/>
                <Route path="/movie" component={SmallCard}/>
                <Route path="/button" component={Button}/>
            </Switch>
        </div>

    );
};