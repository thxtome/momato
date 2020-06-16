import { connect } from 'react-redux';
import { signupActions } from '../../store/modules/signup.js';
import SignupModal from '../../components/member/SignupModal';

const mapStateToProps = state => {
  const { isSignupSucceed } = state.signupReducer;
  return { isSignupSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: member => {
      dispatch(signupActions.SIGNUP_REQUEST({ member }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
