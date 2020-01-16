
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.jsx';

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
)(Home);