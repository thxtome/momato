import MemberInfo from '../../components/member/MemberInfo';
import { loginActions } from '../../store/modules/login';
import { memberUpdateActions } from '../../store/modules/memberUpdate';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { memberInfo, isLogin } = state.loginReducer;
  const { isUpdateSucceed } = state.memberUpdateReducer;
  return { memberInfo, isLogin, isUpdateSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    getMemberInfo: () => {
      dispatch(loginActions.MEMBERINFO_REQUEST());
    },
    clearUpdateResult: () => {
      dispatch(memberUpdateActions.MEMBER_UPDATE_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberInfo);
