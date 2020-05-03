import { connect } from "react-redux";
import { tomatoAddActions } from "../../store/modules/tomatoAdd.js";
import TomatoAddModal from "../../components/tomato/TomatoAddModal.js";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    tomatoAdd: (data) => {
      dispatch(tomatoAddActions.TOMATO_ADD_REQUEST({ data }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoAddModal);
