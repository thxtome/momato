import { connect } from "react-redux";
import { tomatoEditActions } from "../../store/modules/tomatoEdit.js";
import { tomatoActions } from "../../store/modules/tomato.js";
import TomatoEditModal from "../../components/tomato/TomatoEditModal.js";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    tomatoEdit: (data) => {
      dispatch(tomatoEditActions.TOMATO_EDIT_REQUEST({ data }));
    },

    getTomatos: (data) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }));
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
