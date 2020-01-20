import React, { Component} from 'react';
import { dataUtils } from '../../utils'
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    _handleLoginClick = () => {
        let { history, changeLoginStatus } = this.props;
        let loginInfo = JSON.stringify({
            username: 'Shawn',
            mobile: '166****3200'
        })
        dataUtils.addData('loginInfo', loginInfo);
        changeLoginStatus({
            loginStatus: true
        })
        history.push('/');

    }
    componentDidMount() {
       
    }
    render() {
        return <div>
            <h3>Shawn，欢迎来到登录页面。</h3>
            <button onClick={this._handleLoginClick}>登录</button>
        </div>
    }
}

export default Login;