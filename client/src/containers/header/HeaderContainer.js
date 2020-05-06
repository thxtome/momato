import Header from "../../components/header/Header";
import { loginActions } from "../../store/modules/login";
import { connect } from "react-redux";
import { tomatoActions } from "../../store/modules/tomato.js";

const mapStateToProps = (state) => {
    return state;
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => {
        dispatch(loginActions.LOGOUT());
      },
      getTomatos: (date) => {
        dispatch(tomatoActions.TOMATO_REQUEST({ date }));
      },
      getTempTomatoList: () => {
        dispatch(tomatoActions.TOMATO_TEMP_REQUEST());
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);
  