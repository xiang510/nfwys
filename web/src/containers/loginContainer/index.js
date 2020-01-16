
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login.jsx';

const mapStateToProps = state => {
  return {};
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
)(Login);