import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";
import ButtonCounter from "./ButtonCounter";

const {Header} = Layout;

export class HeaderMy extends Component {

    handleClick = e => {
        console.log('click', e);

    };

    render() {
        return (
            <Header>
                <div className="logo"/>
                <Menu
                    onClick={this.handleClick}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">Movies</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
        )
    }
}
export default  HeaderMy;
/*



 */










        {/*<Link to="/">Home</Link>*/}
{/*<Link to="/movies">Movies</Link>*/}
{/*<Link to="/form">Movies</Link>*/}
/*
<Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
   <Menu.Item key="2"><Link to="/movies">Movies</Link></Menu.Item>
   <Menu.Item key="3"><Link to="/">Home</Link></Menu.Item>
   */
/*  <Menu key="1">Home</Menu>
  <Menu key="2">Movies</Menu>
  <Menu key="3">Home</Menu>
</Menu>*/