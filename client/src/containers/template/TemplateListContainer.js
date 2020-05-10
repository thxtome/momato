import { connect } from "react-redux"
import { templateActions } from "../../store/modules/template.js"
import { templateDeleteActions } from "../../store/modules/templateDelete.js"
import TemplateList from "../../components/template/TemplateList.js"

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTemplateList: () => {
      dispatch(templateActions.TEMPLATE_REQUEST())
    },
    deleteTemplate: (data) => {
      dispatch(templateDeleteActions.TEMPLATE_DELETE_REQUEST({ data }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList)
