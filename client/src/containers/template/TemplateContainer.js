import { connect } from 'react-redux';
import { deleteTemplateActions } from '../../store/modules/deleteTemplate.js';
import Template from '../../components/template/Template.js';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTemplate: data => {
      dispatch(deleteTemplateActions.DELETE_TEMPLATE_REQUEST({ data }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
