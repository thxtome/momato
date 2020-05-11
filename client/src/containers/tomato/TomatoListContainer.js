import { connect } from "react-redux";
import { tomatoActions } from "../../store/modules/tomato.js";
import { tomatoDeleteActions } from "../../store/modules/tomatoDelete.js";
import TomatoList from "../../components/tomato/TomatoList.js";

const mapStateToProps = (state) => {
  const isTomatoDeleteSucceed = state.tomatoDeleteReducer.isTomatoDeleteSucceed;
  const tomatos = state.tomatoReducer.tomatos;
  const isLogin = state.loginReducer.isLogin;
  return { isTomatoDeleteSucceed, isLogin, tomatos };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTomatoList: (data) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }));
    },

    getTempTomatoList: () => {
      dispatch(tomatoActions.TOMATO_TEMP_REQUEST());
    },

    tomatoDelete: (data) => {
      dispatch(tomatoDeleteActions.TOMATO_DELETE_REQUEST({ data }));
    },

    tomatoTempDelete: (tomatoIdx) => {
      dispatch(tomatoDeleteActions.TOMATO_TEMP_DELETE({ tomatoIdx }));
    },

    clearDeleteResult: () => {
      dispatch(tomatoDeleteActions.TOMATO_DELETE_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoList);
