import React, {Component} from 'react';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {Link} from "react-router-dom";
import {store} from "../store";
import {Layout, Breadcrumb} from 'antd';
import {createBrowserHistory} from "history";
import {HeaderMy} from "../components/HeaderMy";
import {Main} from "../routs/index";

import '../style/App.css';
import 'antd/dist/antd.css';
import '../style/index.css';

const {Content, Footer} = Layout;

export const history = createBrowserHistory();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Router history={history}>
                    <HeaderMy/>
                    <Content style={{padding: '0 50px', marginTop: 64}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{background: '#eee', padding: 24, minHeight: 380}}>

                                <Main/>

                        </div>
                    </Content>
                    </Router>
                    <Footer>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Provider>
        );
    }
}


export default App;



/*

   <div className="App">
     <header className="App-header">
       <MenuTest/>
       <p>
         Edit <code>src/App.js</code> and save to reload.
       </p>
       <ButtonCounter />
       <Hello />
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>
   </div>

*/


/*
// ReactDOM.render(
//     ,
//     document.getElementById('container'),
// );
*/
