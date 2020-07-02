import Header from '../../components/header/Header';
import { loginActions } from '../../store/modules/login';
import { connect } from 'react-redux';
import { tomatoActions } from '../../store/modules/tomato.js';

const mapStateToProps = state => {
  const { isLogin, isMemberLoading } = state.loginReducer;
  const { isTomatoLoading } = state.tomatoReducer;
  const { isTemplateLoading } = state.templateReducer;
  const { isCalendarLoading } = state.calendarReducer;
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
      dispatch(tomatoActions.TOMATO_TEMP_REQUEST());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
