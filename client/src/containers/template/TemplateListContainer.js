import { connect } from "react-redux"
import { templateActions } from "../../store/modules/template.js"
import { templateAddActions } from "../../store/modules/templateAdd.js"
import { templateEditActions } from "../../store/modules/templateEdit.js"
import { templateDeleteActions } from "../../store/modules/templateDelete.js"
import TemplateList from "../../components/template/TemplateList.js"

const mapStateToProps = (state) => {
  const { isTemplateAddSucceed } = state.templateAddReducer
  const { isTemplateEditSucceed } = state.templateEditReducer
  const { isTemplateDeleteSucceed } = state.templateDeleteReducer
  const { templates } = state.templateReducer
  return { isTemplateAddSucceed, isTemplateEditSucceed, isTemplateDeleteSucceed, templates }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTemplateList: () => {
      dispatch(templateActions.TEMPLATE_REQUEST())
    },
    clearAddResult: () => {
      dispatch(templateAddActions.TEMPLATE_ADD_CLEAR())
    },
    clearEditResult: () => {
      dispatch(templateEditActions.TEMPLATE_EDIT_CLEAR())
    },
    clearDeleteResult: () => {
      dispatch(templateDeleteActions.TEMPLATE_DELETE_CLEAR())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList)
