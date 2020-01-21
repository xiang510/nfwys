import React, { Component} from 'react';
import { RouteWithSubRoutes  } from '../../routers';
import { dataUtils } from '../../utils';
import '../../assets/css/main.css';

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
                        <div className="ui-home-title">不忘初心</div>
                        <ul className="ui-home-navwrap"> 
                            <li className="ui-home-item">
                                Item 1
                            </li>
                            <li className="ui-home-item">
                                Item 2
                            </li>
                            <li className="ui-home-item">
                                Item 3
                            </li>
                        </ul>
                        <div className="ui-home-linkwrap">
                            <p>站内链接</p>
                            <div>
                                <a href="http://shawn.nfwys.com" target="_blank">我的博客</a>
                                <a href="https://github.com/xiang510" target="_blank">我的Github</a>
                            </div>
                        </div>
                        <div className="ui-home-bottom" >
                            <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备18145979号</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        height: '100%',
        paddingRight: '320px',
     },
    leftWrap: {
        height: '100%',
        width: '100%',
    },
    rightWrap: {
        height: '100%',
        width: '320px',
        marginRight: '-320px',
        position: 'relative',
        backgroundColor: 'rgba(41, 16, 0, 1)'
    }
}
export default Home;