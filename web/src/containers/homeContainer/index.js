
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.jsx';
import {  LOGINSTATUS } from '../../actions'

const mapStateToProps = state => {
  return {
    loginStatus: state.loginStatus
  };
};


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      changeLoginStatus: LOGINSTATUS
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);