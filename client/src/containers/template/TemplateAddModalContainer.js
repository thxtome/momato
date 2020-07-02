import { connect } from 'react-redux';
import { addTemplateActions } from '../../store/modules/addTemplate.js';
import TemplateAddModal from '../../components/template/TemplateAddModal.js';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    addTemplate: data => {
      dispatch(addTemplateActions.ADD_TEMPLATE_REQUEST({ data }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateAddModal);
