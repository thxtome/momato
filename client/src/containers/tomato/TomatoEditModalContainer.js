import { connect } from 'react-redux';
import { editTomatoActions } from '../../store/modules/editTomato.js';
import { getTomatoActions } from '../../store/modules/getTomato.js';
import TomatoEditModal from '../../components/tomato/TomatoEditModal.js';

const mapStateToProps = state => {
  const { isLogin } = state.loginReducer;
  const isTomatoEditSucceed = state.editTomatoReducer.isTomatoEditSucceed;
  return { isLogin, isTomatoEditSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    editTomato: data => {
      dispatch(editTomatoActions.EDIT_TOMATO_REQUEST({ data }));
    },
    editTempTomato: editedTempTomato => {
      dispatch(editTomatoActions.EDIT_TEMP_TOMATO({ editedTempTomato }));
    },
    getTempTomatoList: () => {
      dispatch(getTomatoActions.GET_TEMP_TOMATO_REQUEST());
    },
    getTomatoList: data => {
      dispatch(getTomatoActions.GET_TOMATO_REQUEST({ data }));
    },
    clearEditTomatoResult: () => {
      dispatch(editTomatoActions.EDIT_TOMATO_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TomatoEditModal);
