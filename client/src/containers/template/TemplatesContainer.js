import { connect } from "react-redux"
import Templates from "../../routes/Templates"
import { templateDeleteActions } from "../../store/modules/templateDelete.js"
import { templateEditActions } from "../../store/modules/templateEdit.js"

const mapStateToProps = (state) => {
  const { isLogin } = state.loginReducer
  const { isTemplateDeleteSucceed } = state.templateDeleteReducer.isTemplateDeleteSucceed
  return { isLogin, isTemplateDeleteSucceed }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearDeleteResult: () => {
      dispatch(templateDeleteActions.TEMPLATE_DELETE_CLEAR())
    },
    clearEditResult: () => {
      dispatch(templateEditActions.TEMPLATE_EDIT_CLEAR())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Templates)
