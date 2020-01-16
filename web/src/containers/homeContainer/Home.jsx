import React, { Component} from 'react';
import { RouteWithSubRoutes  } from '../../routers'
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            containerHeight: document.documentElement.clientHeight + 'px'
        }
    }

    componentDidMount() { 
        console.log(this.props)
     }

    render() {
        let { routes } = this.props;
        return (
            <div style={{ height: this.state.containerHeight}}>
                <div style={styles.container} className="clearfix">
                    <div style={styles.leftWrap} className="fl">
                        {
                            routes.map( (route, i) => <RouteWithSubRoutes key={i} {...route} />)
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