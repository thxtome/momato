import { connect } from "react-redux";
import { templateEditActions } from "../../store/modules/templateEdit.js";
import TemplateModal from "../../components/template/TemplateModal.js";

const mapStateToProps = (state) => {
    return state;
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      editTemplate: () => {
        dispatch(templateEditActions.TEMPLATE_EDIT_REQUEST());
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TemplateModal);
  