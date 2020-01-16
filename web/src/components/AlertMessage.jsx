import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class AlertMessage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {}
    }
    componentDidMount() {
        
    }
    render() {
        let { } = this.props;
        if(true) {
            return (
                <div style={styles.bg} >
                    <div style={{ ...styles.content }}>
                        {toastMessage}
                    </div>
                    <span style={styles.blank}></span>
                </div>
           )

        }else {
            return null;
        }
    }
}
const styles = {
    bg: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    content: {
        display: 'inline-block',
        lineHeight: '35px',
        backgroundColor: '#12161F',
        color: '#fff',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '4px',
        opacity: 0.7
    },
    blank: {
        display: 'inline-block', 
        width: 0, 
        height: '100%', 
        verticalAlign: 'middle'
    }
}

const mapStateToProps = state => {
    return {
      
    };
  };
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {},
        dispatch
    );
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlertMessage);