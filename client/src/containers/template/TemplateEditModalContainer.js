import { connect } from "react-redux"
import { templateEditActions } from "../../store/modules/templateEdit.js"
import { templateActions } from "../../store/modules/template.js"
import TemplateEditModal from "../../components/template/TemplateEditModal.js"

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTemplate: (data) => {
      dispatch(templateEditActions.TEMPLATE_EDIT_REQUEST(data))
    },
    getTemplateList: () => {
      dispatch(templateActions.TEMPLATE_REQUEST())
    },
    clearEditResult: () => {
      dispatch(templateEditActions.TEMPLATE_EDIT_CLEAR())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateEditModal)
