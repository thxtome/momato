import { connect } from "react-redux"
import { templateDeleteActions } from "../../store/modules/templateDelete.js"
import Template from "../../components/template/Template.js"

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
