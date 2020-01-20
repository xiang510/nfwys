import React, { Component} from 'react';
import { RouteWithSubRoutes  } from '../../routers';
import { dataUtils } from '../../utils'
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            containerHeight: document.documentElement.clientHeight + 'px',
        }
        this._loginInfo = null;
        
    }

   
    componentDidMount() { 
        let { history, location, routes ,loginStatus, changeLoginStatus} = this.props;
        this._loginInfo = dataUtils.getData('loginInfo');

        if(this._loginInfo && !loginStatus) {
            changeLoginStatus({
                loginStatus: true
            })
        }

        if(!this._loginInfo) {
            if(location.pathname === '/' || location.pathname === '/index') {
                history.push('/login')
            }else {
                if(!routes.filter( (item) => item.path === location.pathname).length){
                    history.push('/notfound')
                }else if(routes.filter( (item) => item.path === location.pathname && item.requireLogin).length) {
                    history.push('/login')
                }
            }
          
        }else {
            if(location.pathname === '/' || location.pathname === '/index') {
                history.push('/index')
            }else if(!routes.filter( (item) => item.path === location.pathname).length){
                history.push('/notfound')
            }
        }

     }

    render() {
        let { routes ,loginStatus } = this.props;

        return (
            <div style={{ height: this.state.containerHeight}}>
                <div style={styles.container} className="clearfix">
                    <div style={styles.leftWrap} className="fl">
                        {
                            routes.map( (route, i) => <RouteWithSubRoutes key={i} {...route} loginStatus={loginStatus}  />)
                        }
                    </div>
                    <div style={ styles.rightWrap} className="fl">
                        <p>Shawn, 欢迎来到首页。</p>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        height: '100%',
        paddingRight: '240px',
     },
    leftWrap: {
        backgroundColor: 'pink',
        height: '100%',
        width: '100%',
    },
    rightWrap: {
        backgroundColor: 'purple',
        height: '100%',
        width: '240px',
        marginRight: '-240px'
    }
}
export default Home;