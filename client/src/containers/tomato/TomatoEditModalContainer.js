import { connect } from "react-redux"
import { tomatoEditActions } from "../../store/modules/tomatoEdit.js"
import { tomatoActions } from "../../store/modules/tomato.js"
import TomatoEditModal from "../../components/tomato/TomatoEditModal.js"

const mapStateToProps = (state) => {
  const { isLogin } = state.loginReducer
  return { isLogin }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTomato: (data) => {
      dispatch(tomatoEditActions.TOMATO_EDIT_REQUEST({ data }))
    },
    editTempTomato: (editedTempTomato) => {
      dispatch(tomatoEditActions.TOMATO_TEMP_EDIT({ editedTempTomato }))
    },
    getTempTomatoList: () => {
      dispatch(tomatoActions.TOMATO_TEMP_REQUEST())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TomatoEditModal)
