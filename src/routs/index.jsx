import React from "react";
import {Route, Switch} from "react-router-dom";
import { ButtonCounter } from "../components/ButtonCounter";//                 ../components/ButtonCounter";
import { Button } from "../components/Button";
import {MyMoviesContainer} from "../container/MyMovies";
import {MyDetailCard} from "../components/DetailCard";
import {MySessions} from "../container/Sessions";

export const Main = () => {
    return (
        <div>
            {/*<Header/>*/}
            <Switch>
                <Route path="/" exact component={MyMoviesContainer}/>
                <Route path="/movie" component={MyDetailCard}/>
                <Route path="/sessions" component={MySessions}/>
                <Route path="/button" component={Button}/>
            </Switch>
        </div>

    );
};