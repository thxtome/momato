import LoginModal from "../../components/login/LoginModal";
import { loginActions } from "../../store/modules/login";
import { connect } from "react-redux";
import { tomatoActions } from "../../store/modules/tomato.js";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (member) => {
      dispatch(loginActions.LOGIN_REQUEST({ member }));
    },
    getTomatos: (date) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ date }));
    },
    loginFailedClear: () => {
      dispatch(loginActions.LOGIN_FAILED_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
