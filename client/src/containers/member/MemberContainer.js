import Member from '../../components/member/Member';
import { loginActions } from '../../store/modules/login';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { memberInfo, isLogin } = state.loginReducer;
  return { memberInfo, isLogin };
};

const mapDispatchToProps = dispatch => {
  return {
    getMemberInfo: () => {
      dispatch(loginActions.GET_MEMBERINFO_REQUEST());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Member);
