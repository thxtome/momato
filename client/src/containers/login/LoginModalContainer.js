import LoginModal from '../../components/login/LoginModal';
import { loginActions } from '../../store/modules/login';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const isLogin = state.loginReducer.isLogin;
  return { isLogin };
};

const mapDispatchToProps = dispatch => {
  return {
    login: member => {
      dispatch(loginActions.LOGIN_REQUEST({ member }));
    },
    clearLoginFailed: () => {
      dispatch(loginActions.LOGIN_FAILED_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
