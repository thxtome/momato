import Header from '../../components/header/Header';
import { loginActions } from '../../store/modules/login';
import { connect } from 'react-redux';
import { getTomatoActions } from '../../store/modules/getTomato.js';

const mapStateToProps = state => {
  const { isLogin, isMemberLoading } = state.loginReducer;
  const { isTomatoLoading } = state.getTomatoReducer;
  const { isTemplateLoading } = state.getTemplateReducer;
  const { isCalendarLoading } = state.getCalendarReducer;
  const { isTimerLoading } = state.counterReducer;
  const { isFindPassLoading } = state.findPassReducer;
  return {
    isLogin,
    isMemberLoading,
    isTomatoLoading,
    isTemplateLoading,
    isCalendarLoading,
    isTimerLoading,
    isFindPassLoading,
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
