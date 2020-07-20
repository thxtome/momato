import Header from '../../components/header/Header';
import { loginActions } from '../../store/modules/login';
import { connect } from 'react-redux';
import { getTomatoActions } from '../../store/modules/getTomato.js';

const mapStateToProps = state => {
  const { isLogin } = state.loginReducer;
  const { isTimerLoading } = state.counterReducer;
  const { isGetLoading, isPostLoading, isPutLoading, isDeleteLoading, isMemberLoading } = state.loadingReducer;
  return {
    isLogin,
    isMemberLoading,
    isTimerLoading,
    isGetLoading,
    isPostLoading,
    isPutLoading,
    isDeleteLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: auth => {
      dispatch(loginActions.LOGOUT_REQUEST({ auth }));
    },
    getTempTomatoList: () => {
      dispatch(getTomatoActions.GET_TEMP_TOMATO_REQUEST());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
