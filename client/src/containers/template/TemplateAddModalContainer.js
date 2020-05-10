import { connect } from "react-redux"
import { templateAddActions } from "../../store/modules/templateAdd.js"
import { templateActions } from "../../store/modules/template.js"
import TemplateAddModal from "../../components/template/TemplateAddModal.js"

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTemplate: (data) => {
      dispatch(templateAddActions.TEMPLATE_ADD_REQUEST({ data }))
    },
    getTemplateList: () => {
      dispatch(templateActions.TEMPLATE_REQUEST())
    },
    clearAddResult: () => {
      dispatch(templateAddActions.TEMPLATE_ADD_CLEAR())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateAddModal)
