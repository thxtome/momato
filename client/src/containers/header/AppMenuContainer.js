import AppMenu from "../../components/header/AppMenu"
import { connect } from "react-redux"
import { templateActions } from "../../store/modules/template"
import { templateEditActions } from "../../store/modules/templateEdit"
import { templateDeleteActions } from "../../store/modules/templateDelete"

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTemplateList: () => {
      dispatch(templateActions.TEMPLATE_REQUEST())
    },
    clearEditResult: () => {
      dispatch(templateEditActions.TEMPLATE_EDIT_CLEAR())
    },
    clearDeleteResult: () => {
      dispatch(templateDeleteActions.TEMPLATE_DELETE_CLEAR())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu)
