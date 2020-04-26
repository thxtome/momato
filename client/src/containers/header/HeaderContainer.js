import { connect } from "react-redux";
import { loginActions } from "../../store/modules/login.js";
import Header from "../../components/header/Header";

const mapStateToProps = (state) => {
  return {
    loginInfo: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginCheck: () => {
      dispatch(loginActions.LOGIN_CHK());
    },
    login: () => {
      console.log(loginActions.LOGIN);
      dispatch(loginActions.LOGIN());
    },
    logout: () => {
      dispatch(loginActions.LOGOUT());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
