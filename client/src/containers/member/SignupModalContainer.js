import { connect } from 'react-redux';
import { signupActions } from '../../store/modules/signup.js';
import SignupModal from '../../components/member/SignupModal';

const mapStateToProps = state => {
  const isSignupSucceed = state.signupReducer.isSignupSucceed;
  return { isSignupSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: member => {
      dispatch(signupActions.SIGNUP_REQUEST({ member }));
    },
    clearSignupResult: () => {
      dispatch(signupActions.SIGNUP_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
