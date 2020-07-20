import { connect } from 'react-redux';
import { editTemplateActions } from '../../store/modules/editTemplate.js';
import { getTemplateActions } from '../../store/modules/getTemplate.js';
import TemplateEditModal from '../../components/template/TemplateEditModal.js';

const mapStateToProps = state => {
  const isTemplateEditSucceed = state.editTemplateReducer.isTemplateEditSucceed;
  return { isTemplateEditSucceed };
};

const mapDispatchToProps = dispatch => {
  return {
    editTemplate: data => {
      dispatch(editTemplateActions.EDIT_TEMPLATE_REQUEST(data));
    },
    getTemplateList: () => {
      dispatch(getTemplateActions.GET_TEMPLATE_REQUEST());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateEditModal);
