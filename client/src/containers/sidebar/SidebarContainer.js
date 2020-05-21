import Sidebar from "../../components/sidebar/Sidebar"
import { connect } from "react-redux"
import { templateActions } from "../../store/modules/template"
import { templateEditActions } from "../../store/modules/templateEdit"
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
