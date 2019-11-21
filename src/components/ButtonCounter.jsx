import React, { Component } from "react";
import { Button } from "./Button";

export class ButtonCounter extends Component {
    state = {
        counter: 0
    };

    handleBtnClick = () => {
        this.setState((prevState) => {
           return { counter: prevState.counter + 1};
        });
    };

    render () {
        return(
            <Button onClick={this.handleBtnClick} text={`You are clicked ${this.state.counter} times`}/>
        );
    }
}

//export default ButtonCounter;