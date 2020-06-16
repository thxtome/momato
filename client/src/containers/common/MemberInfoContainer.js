import MemberInfo from '../../components/common/MemberInfo';
import { loginActions } from '../../store/modules/login';
import { tomatoActions } from '../../store/modules/tomato.js';
import { templateActions } from '../../store/modules/template';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  const { isLogin, memberInfo } = state.loginReducer;
  return { isLogin, memberInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    getMemberInfo: () => {
      dispatch(loginActions.MEMBERINFO_REQUEST());
    },
    getTomatoList: data => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }));
    },
    getTempTomatoList: () => {
      dispatch(tomatoActions.TOMATO_TEMP_REQUEST());
    },
    getTemplateList: () => {
      dispatch(templateActions.TEMPLATE_REQUEST());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberInfo);
