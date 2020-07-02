import { connect } from 'react-redux';
import { getTemplateActions } from '../../store/modules/getTemplate.js';
import { addTemplateActions } from '../../store/modules/addTemplate.js';
import { editTemplateActions } from '../../store/modules/editTemplate.js';
import { deleteTemplateActions } from '../../store/modules/deleteTemplate.js';
import TemplateList from '../../components/template/TemplateList.js';

const mapStateToProps = state => {
  const { isTemplateAddSucceed } = state.addTemplateReducer;
  const { isTemplateEditSucceed } = state.editTemplateReducer;
  const { isTemplateDeleteSucceed } = state.deleteTemplateReducer;
  const { templates } = state.getTemplateReducer;
  return { isTemplateAddSucceed, isTemplateEditSucceed, isTemplateDeleteSucceed, templates };
};

const mapDispatchToProps = dispatch => {
  return {
    getTemplateList: () => {
      dispatch(getTemplateActions.GET_TEMPLATE_REQUEST());
    },
    clearAddTemplateResult: () => {
      dispatch(addTemplateActions.ADD_TEMPLATE_CLEAR());
    },
    clearEditTemplateResult: () => {
      dispatch(editTemplateActions.EDIT_TEMPLATE_CLEAR());
    },
    clearDeleteTemplateResult: () => {
      dispatch(deleteTemplateActions.DELETE_TEMPLATE_CLEAR());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
