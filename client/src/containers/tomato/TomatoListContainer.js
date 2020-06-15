import { connect } from "react-redux"
import { tomatoActions } from "../../store/modules/tomato.js"
import { tomatoAddActions } from "../../store/modules/tomatoAdd.js"
import { tomatoEditActions } from "../../store/modules/tomatoEdit.js"
import { tomatoDeleteActions } from "../../store/modules/tomatoDelete.js"
import TomatoList from "../../components/tomato/TomatoList.js"

const mapStateToProps = (state) => {
  const isLogin = state.loginReducer.isLogin
  const isTomatoEditSucceed = state.tomatoEditReducer.isTomatoEditSucceed
  const isTomatoDeleteSucceed = state.tomatoDeleteReducer.isTomatoDeleteSucceed
  const tomatos = state.tomatoReducer.tomatos
  const templates = state.templateReducer.templates
  return {
    isLogin,
    isTomatoEditSucceed,
    isTomatoDeleteSucceed,
    tomatos,
    templates,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTomatoList: (data) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }))
    },
    getTempTomatoList: () => {
      dispatch(tomatoActions.TOMATO_TEMP_REQUEST())
    },
    addTomatos: (data) => {
      dispatch(tomatoAddActions.TOMATO_ADD_REQUEST({ data }))
    },
    deleteTomato: (data) => {
      dispatch(tomatoDeleteActions.TOMATO_DELETE_REQUEST({ data }))
    },
    deleteTempTomato: (tomatoIdx) => {
      dispatch(tomatoDeleteActions.TOMATO_TEMP_DELETE({ tomatoIdx }))
    },
    clearEditResult: () => {
      dispatch(tomatoEditActions.TOMATO_EDIT_CLEAR())
    },
    clearDeleteResult: () => {
      dispatch(tomatoDeleteActions.TOMATO_DELETE_CLEAR())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TomatoList)
