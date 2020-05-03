import { connect } from "react-redux";
import { tomatoActions } from "../../store/modules/tomato.js";
import TomatoList from "../../components/tomato/TomatoList.js";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTomatoList: (date) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ date }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoList);
