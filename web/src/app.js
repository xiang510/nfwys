import React, { Component, Fragment} from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from './stores';
import Router from './routers';

import ToastMessage from './components/ToastMessage.jsx';
import './assets/css/reset.css';

class RouteControl extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        // 可以在Root  组件中进行路由控制
        console.log(this.props)
    }
    render() {
        let { loginStatus } = this.props;
        return (
            <Fragment>
                <Router  loginStatus={loginStatus} />
                <ToastMessage />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        loginStatus: state.loginStatus,
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {},
        dispatch
    );
};

const Root = connect(
    mapStateToProps,
    mapDispatchToProps
)(RouteControl);

export default function App() {
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    )
}



