import { connect } from 'react-redux';
import { memberUpdateActions } from '../../store/modules/memberUpdate.js';
import { loginActions } from '../../store/modules/login';
import InfoModal from '../../components/member/InfoModal.js';

const mapStateToProps = state => {
  const { isLogin, memberInfo } = state.loginReducer;
  const { isUpdateSucceed } = state.memberUpdateReducer;
  return { isLogin, isUpdateSucceed, memberInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    memberUpdateRequest: member => {
      dispatch(memberUpdateActions.MEMBER_UPDATE_REQUEST({ member }));
    },
    getMemberInfo: () => {
      dispatch(loginActions.MEMBERINFO_REQUEST());
    },
    memberUpdateClear: () => {
      dispatch(memberUpdateActions.MEMBER_UPDATE_SUCCEED_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);
