import MemberInfo from '../../components/common/MemberInfo';
import { loginActions } from '../../store/modules/login';
import { getTomatoActions } from '../../store/modules/getTomato.js';
import { getTemplateActions } from '../../store/modules/getTemplate';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { isLogin, memberInfo } = state.loginReducer;
  return { isLogin, memberInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    getMemberInfo: () => {
      dispatch(loginActions.GET_MEMBERINFO_REQUEST());
    },
    getTomatoList: data => {
      dispatch(getTomatoActions.GET_TOMATO_REQUEST({ data }));
    },
    getTempTomatoList: () => {
      dispatch(getTomatoActions.GET_TEMP_TOMATO_REQUEST());
    },
    getTemplateList: () => {
      dispatch(getTemplateActions.GET_TEMPLATE_REQUEST());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberInfo);
