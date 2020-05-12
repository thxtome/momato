import { connect } from "react-redux"
import Sidebar from "../../components/sidebar/Sidebar"

const mapStateToProps = (state) => {
  const isLogin = state.loginReducer.isLogin
  return state
}

export default connect(mapStateToProps)(Sidebar)
