import { connect } from "react-redux";
import { tomatoActions } from "../../store/modules/tomato.js";
import Sidebar from "../../components/sidebar/Sidebar.js";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    tomato: (data) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
