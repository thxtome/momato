import LoginModal from "../../components/login/LoginModal"
import { loginActions } from "../../store/modules/login"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (member) => {
      dispatch(loginActions.LOGIN_REQUEST({ member }))
    },
    loginFailedClear: () => {
      dispatch(loginActions.LOGIN_FAILED_CLEAR())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
