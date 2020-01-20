
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login.jsx';
import { LOGINSTATUS } from '../../actions'

const mapStateToProps = state => {
  return {};
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
)(Login);