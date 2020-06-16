import { connect } from 'react-redux';
import { templateAddActions } from '../../store/modules/templateAdd.js';
import TemplateAddModal from '../../components/template/TemplateAddModal.js';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    addTemplate: data => {
      dispatch(templateAddActions.TEMPLATE_ADD_REQUEST({ data }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplateAddModal);
