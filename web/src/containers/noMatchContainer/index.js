
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NoMatch from './NoMatch.jsx';

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
)(NoMatch);