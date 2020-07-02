import { connect } from 'react-redux';
import { editMemberActions } from '../../store/modules/editMember.js';
import { loginActions } from '../../store/modules/login';
import InfoModal from '../../components/member/InfoModal.js';

const mapStateToProps = state => {
  const { isLogin, memberInfo } = state.loginReducer;
  const { isUpdateSucceed } = state.editMemberReducer;
  return { isLogin, isUpdateSucceed, memberInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    editMemberRequest: member => {
      dispatch(editMemberActions.EDIT_MEMBER_REQUEST({ member }));
    },
    getMemberInfo: () => {
      dispatch(loginActions.GET_MEMBERINFO_REQUEST());
    },
    clearEditMemberResult: () => {
      dispatch(editMemberActions.EDIT_MEMBER_SUCCEED_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);
