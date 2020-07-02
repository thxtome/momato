import { connect } from 'react-redux';
import Templates from '../../routes/Templates';
import { deleteTemplateActions } from '../../store/modules/deleteTemplate.js';
import { editTemplateActions } from '../../store/modules/editTemplate.js';

const mapStateToProps = state => {
  const { isLogin } = state.loginReducer;
  const { isTemplateDeleteSucceed } = state.deleteTemplateReducer.isTemplateDeleteSucceed;
  return { isLogin, isTemplateDeleteSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    clearDeleteTemplateResult: () => {
      dispatch(deleteTemplateActions.DELETE_TEMPLATE_CLEAR());
    },
    clearEditTemplateResult: () => {
      dispatch(editTemplateActions.EDIT_TEMPLATE_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
