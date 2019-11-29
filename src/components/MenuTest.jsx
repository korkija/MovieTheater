import React from "react";
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Menu, Icon} from 'antd';

//import ButtonCounter from "./ButtonCounter";

const {SubMenu} = Menu;

class MenuTest extends React.Component {
    state = {
        current: 'mail',
    };
    //let list = [1,2,3,4,5,6,7,8,9,0];


    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {

        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="sync">
                    <Icon type="sync" spin/>
                    Navigation 111
                </Menu.Item>
                <Menu.Item key="loading">
                    <Icon type="loading"/>
                    Navigation 222
                </Menu.Item>
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                         <Icon type="setting"/>
                          Navigation 333
                        </span>
                    }>
                    <Menu.ItemGroup title="Cartoon">
                        <Menu.Item key="movie:1">Option 1</Menu.Item>
                        <Menu.Item key="movie:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Fantastic">
                        {list.map(elem => <Menu.Item key="movie:{elem}">{elem}</Menu.Item> )}
                        <Menu.Item key="movie:3">Option 3</Menu.Item>
                        <Menu.Item key="movie:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation 444
                    </a>
                </Menu.Item>
            </Menu>
        );
    }
}

//ReactDOM.render(<MenuTest />, document.querySelector('root'));

export default MenuTest;