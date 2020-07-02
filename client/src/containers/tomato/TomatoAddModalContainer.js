import { connect } from 'react-redux';
import { addTomatoActions } from '../../store/modules/addTomato.js';
import { getTomatoActions } from '../../store/modules/getTomato.js';
import TomatoAddModal from '../../components/tomato/TomatoAddModal.js';

const mapStateToProps = state => {
  const { isLogin } = state.loginReducer;
  const { isTomatoAddSucceed } = state.addTomatoReducer;
  return { isLogin, isTomatoAddSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    addTomato: data => {
      dispatch(addTomatoActions.ADD_TOMATO_REQUEST({ data }));
    },
    addTempTomato: tempTomato => {
      dispatch(addTomatoActions.ADD_TEMP_TOMATO({ tempTomato }));
    },
    getTempTomatoList: () => {
      dispatch(getTomatoActions.GET_TEMP_TOMATO_REQUEST());
    },
    getTomatoList: data => {
      dispatch(getTomatoActions.GET_TOMATO_REQUEST({ data }));
    },
    clearAddTomatoResult: () => {
      dispatch(addTomatoActions.ADD_TOMATO_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoAddModal);
