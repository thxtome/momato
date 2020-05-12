import { connect } from "react-redux";
import { tomatoAddActions } from "../../store/modules/tomatoAdd.js";
import { tomatoActions } from "../../store/modules/tomato.js";
import TomatoAddModal from "../../components/tomato/TomatoAddModal.js";

const mapStateToProps = (state) => {
  const isTomatoAddSucceed = state.tomatoAddReducer.isTomatoAddSucceed;
  const isLogin = state.loginReducer.isLogin;
  return { isTomatoAddSucceed, isLogin };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tomatoAdd: (data) => {
      dispatch(tomatoAddActions.TOMATO_ADD_REQUEST({ data }));
    },

    addTempTomato: (tempTomato) => {
      dispatch(tomatoAddActions.TOMATO_TEMP_ADD({ tempTomato }));
    },

    getTomatos: (data) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }));
    },

    getTempTomatoList: () => {
      dispatch(tomatoActions.TOMATO_TEMP_REQUEST());
    },

    clearAddResult: () => {
      dispatch(tomatoAddActions.TOMATO_ADD_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoAddModal);
