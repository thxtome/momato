import { connect } from 'react-redux';
import { findPassActions } from '../../store/modules/findPass.js';
import FindPassModal from '../../components/member/FindPassModal.js';

const mapStateToProps = state => {
  console.log(state);
  const { isFindPassSucceed } = state.findPassReducer;
  return { isFindPassSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    sendTempPass: data => {
      dispatch(findPassActions.FIND_PASS_REQUEST(data));
    },
    clearSuccess: () => {
      dispatch(findPassActions.FIND_PASS_SUCCEED_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPassModal);
