import MobileMemberInfo from '../../components/member/MobileMemberInfo';
import { loginActions } from '../../store/modules/login';
import { editMemberActions } from '../../store/modules/editMember';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { memberInfo, isLogin } = state.loginReducer;
  const { isUpdateSucceed } = state.editMemberReducer;
  return { memberInfo, isLogin, isUpdateSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    getMemberInfo: () => {
      dispatch(loginActions.GET_MEMBERINFO_REQUEST());
    },
    clearEditMemberResult: () => {
      dispatch(editMemberActions.EDIT_MEMBER_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMemberInfo);
