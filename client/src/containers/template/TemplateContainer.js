import { connect } from "react-redux"
import { templateEditActions } from "../../store/modules/templateEdit.js"
import { templateDeleteActions } from "../../store/modules/templateDelete.js"
import { templateActions } from "../../store/modules/template.js"
import Template from "../../components/template/Template.js"
import { tomatoActions } from "../../store/modules/tomato.js"

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTemplate: (data) => {
      dispatch(templateDeleteActions.TEMPLATE_DELETE_REQUEST({ data }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Template)
