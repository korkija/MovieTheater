import React from "react";
import {Route, Switch} from "react-router-dom";
import {MyMoviesContainer} from "../container/MyMovies";
import {MyDetailCard} from "../components/DetailCard";
import {MySessions} from "../container/Sessions";
import {MyTicketsList} from "../container/TicketsList";

export const Main = () => {
    return (
        <div>
            {/*<Header/>*/}
            <Switch>
                <Route path="/" exact component={MyMoviesContainer}/>
                <Route path="/movie" component={MyDetailCard}/>
                <Route path="/sessions" component={MySessions}/>
                <Route path="/buy" component={MyTicketsList}/>
            </Switch>
        </div>

    );
};