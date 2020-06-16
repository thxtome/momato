import { connect } from 'react-redux';
import { tomatoAddActions } from '../../store/modules/tomatoAdd.js';
import { tomatoActions } from '../../store/modules/tomato.js';
import TomatoAddModal from '../../components/tomato/TomatoAddModal.js';

const mapStateToProps = state => {
  const { isLogin } = state.loginReducer;
  const { isTomatoAddSucceed } = state.tomatoAddReducer;
  return { isLogin, isTomatoAddSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    addTomato: data => {
      dispatch(tomatoAddActions.TOMATO_ADD_REQUEST({ data }));
    },
    addTempTomato: tempTomato => {
      dispatch(tomatoAddActions.TOMATO_TEMP_ADD({ tempTomato }));
    },
    getTempTomatoList: () => {
      dispatch(tomatoActions.TOMATO_TEMP_REQUEST());
    },
    getTomatoList: data => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }));
    },
    clearAddResult: () => {
      dispatch(tomatoAddActions.TOMATO_ADD_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoAddModal);
