import AppMenu from "../../components/header/AppMenu"
import { connect } from "react-redux"
import { templateActions } from "../../store/modules/template"
import { templateEditActions } from "../../store/modules/templateEdit"
import { templateDeleteActions } from "../../store/modules/templateDelete"

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AppMenu)
