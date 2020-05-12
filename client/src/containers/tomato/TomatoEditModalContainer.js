import { connect } from "react-redux";
import { tomatoEditActions } from "../../store/modules/tomatoEdit.js";
import { tomatoActions } from "../../store/modules/tomato.js";
import TomatoEditModal from "../../components/tomato/TomatoEditModal.js";

const mapStateToProps = (state) => {
  const { isTomatoEditSucceed } = state.tomatoEditReducer;
  const { isLogin } = state.loginReducer;
  return { isTomatoEditSucceed, isLogin };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tomatoEdit: (data) => {
      dispatch(tomatoEditActions.TOMATO_EDIT_REQUEST({ data }));
    },

    getTomatos: (data) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }));
    },

    tempTomatoEdit: (editedTempTomato) => {
      dispatch(tomatoEditActions.TOMATO_TEMP_EDIT({ editedTempTomato }));
    },

    getTempTomatoList: () => {
      dispatch(tomatoActions.TOMATO_TEMP_REQUEST());
    },

    clearEditResult: () => {
      dispatch(tomatoEditActions.TOMATO_EDIT_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoEditModal);
