import { connect } from 'react-redux';
import { findPassActions } from '../../store/modules/findPass.js';
import FindPassModal from '../../components/member/FindPassModal.js';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    sendTempPass: data => {
      dispatch(findPassActions.FIND_PASS_REQUEST(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPassModal);
