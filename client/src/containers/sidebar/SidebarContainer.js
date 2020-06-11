import Sidebar from "../../components/sidebar/Sidebar"
import { connect } from "react-redux"
const mapStateToProps = (state) => {
  const isLogin = state.loginReducer.isLogin
  return { isLogin }
}

export default connect(mapStateToProps)(Sidebar)
