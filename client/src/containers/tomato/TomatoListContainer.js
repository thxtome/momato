import { connect } from "react-redux";
import { tomatoActions } from "../../store/modules/tomato.js";
import { tomatoDeleteActions } from "../../store/modules/tomatoDelete.js";
import TomatoList from "../../components/tomato/TomatoList.js";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTomatoList: (date) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ date }));
    },
    tomatoDelete: (data) => {
      dispatch(tomatoDeleteActions.TOMATO_DELETE_REQUEST({ data }));
    },
    clearDeleteResult: () => {
      dispatch(tomatoDeleteActions.TOMATO_DELETE_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoList);
