
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Test from './Test.jsx';

import { handleSleepTest } from '../../actions';
const mapStateToProps = state => {
  return {
    test: state.test,
  };
};


const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
        handleSleepTest,
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);