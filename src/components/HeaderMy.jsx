import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";

const {Header} = Layout;

export class HeaderMy extends Component {

    handleSelect = e => {
        console.log('click', e);
    };

    render() {
        // defaultSelectedKeys={['1']}
        return (
            <Header>
                <div className="logo"/>
                <Menu
                    onSelect={this.handleSelect}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/movie">Movie</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/sessions">Sessions</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/button">button 3</Link></Menu.Item>
                </Menu>
            </Header>
        )
    }
}








