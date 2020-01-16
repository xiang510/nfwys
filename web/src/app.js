import React, { Component} from 'react';
import { Provider } from 'react-redux';
import store from './stores';
import Router from './routers';

import ToastMessage from './components/ToastMessage.jsx';
import Login from './containers/loginContainer';

import './assets/css/reset.css';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: true
        }
    }
    componentDidMount() {

    }
    render() {
        let { isLogin } = this.state;
        return (
            <Provider store={store}>
                {!isLogin && <Login />}
                {isLogin && <Router />}
                <ToastMessage />
            </Provider>
        )
    }
}

export default App;