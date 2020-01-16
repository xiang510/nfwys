import React, { Component} from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            containerHeight: document.documentElement.clientHeight + 'px'
        }
    }

    componentDidMount() { 

     }

    render() {
        return (
            <div style={{ height: this.state.containerHeight}}>
                <div style={styles.leftWrap} className="fl"></div>
                <div style={ styles.rightWrap} className="fl"></div>
            </div>
        )
    }
}

const styles = {
    container: { },
    leftWrap: {
        backgroundColor: 'pink',
        height: '100%',
        width: '100%',
        paddingRight: '240px',
        // marginRight: '240px',
    },
    rightWrap: {
        backgroundColor: 'purple',
        height: '100%',
        width: '240px',
        marginLeft: '240px'
    }
}
export default Home;