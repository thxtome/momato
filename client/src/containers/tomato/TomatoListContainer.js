import { connect } from 'react-redux';
import { getTomatoActions } from '../../store/modules/getTomato.js';
import { addTomatoActions } from '../../store/modules/addTomato.js';
import { deleteTomatoActions } from '../../store/modules/deleteTomato.js';
import TomatoList from '../../components/tomato/TomatoList.js';

const mapStateToProps = state => {
  const isLogin = state.loginReducer.isLogin;
  const isTomatoDeleteSucceed = state.deleteTomatoReducer.isTomatoDeleteSucceed;
  const tomatos = state.getTomatoReducer.tomatos;
  const templates = state.getTemplateReducer.templates;
  return {
    isLogin,
    isTomatoDeleteSucceed,
    tomatos,
    templates,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTomatoList: data => {
      dispatch(getTomatoActions.GET_TOMATO_REQUEST({ data }));
    },
    clearTomatoList: data => {
      dispatch(getTomatoActions.CLEAR_TOMATO_REQUEST({ data }));
    },

    getTempTomatoList: () => {
      dispatch(getTomatoActions.GET_TEMP_TOMATO_REQUEST());
    },
    addTomatos: data => {
      dispatch(addTomatoActions.ADD_TOMATO_REQUEST({ data }));
    },
    deleteTomato: data => {
      dispatch(deleteTomatoActions.DELETE_TOMATO_REQUEST({ data }));
    },
    deleteTempTomato: tomatoIdx => {
      dispatch(deleteTomatoActions.DELETE_TEMP_TOMATO({ tomatoIdx }));
    },
    clearDeleteTomatoResult: () => {
      dispatch(deleteTomatoActions.DELETE_TOMATO_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoList);
