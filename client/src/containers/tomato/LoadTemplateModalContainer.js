import { connect } from 'react-redux';
import { addTomatoActions } from '../../store/modules/addTomato.js';
import { getTomatoActions } from '../../store/modules/getTomato.js';
import LoadTemplateModal from '../../components/tomato/LoadTemplateModal.js';

const mapStateToProps = state => {
  const { isLogin } = state.loginReducer;
  const { isTomatoAddSucceed } = state.addTomatoReducer;
  const { templates } = state.getTemplateReducer;
  return { isLogin, isTomatoAddSucceed, templates };
};

const mapDispatchToProps = dispatch => {
  return {
    addTomatos: data => {
      dispatch(addTomatoActions.ADD_TOMATO_REQUEST({ data }));
    },
    getTomatoList: data => {
      dispatch(getTomatoActions.GET_TOMATO_REQUEST({ data }));
    },
    clearAddTomatoResult: () => {
      dispatch(addTomatoActions.ADD_TOMATO_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadTemplateModal);
