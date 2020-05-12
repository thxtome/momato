import { connect } from "react-redux"
import { tomatoActions } from "../../store/modules/tomato.js"
import { tomatoDeleteActions } from "../../store/modules/tomatoDelete.js"
import { tomatoAddActions } from "../../store/modules/tomatoAdd.js"
import TomatoList from "../../components/tomato/TomatoList.js"

const mapStateToProps = (state) => {
  console.log(state)
  const isTomatoDeleteSucceed = state.tomatoDeleteReducer.isTomatoDeleteSucceed
  const tomatos = state.tomatoReducer.tomatos
  const templates = state.templateReducer.templates
  const isLogin = state.loginReducer.isLogin
  console.log(tomatos)
  console.log(templates)
  return { isTomatoDeleteSucceed, isLogin, tomatos, templates }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTomatoList: (data) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }))
    },

    getTempTomatoList: () => {
      dispatch(tomatoActions.TOMATO_TEMP_REQUEST())
    },

    tomatoDelete: (data) => {
      dispatch(tomatoDeleteActions.TOMATO_DELETE_REQUEST({ data }))
    },

    tomatoTempDelete: (tomatoIdx) => {
      dispatch(tomatoDeleteActions.TOMATO_TEMP_DELETE({ tomatoIdx }))
    },

    clearDeleteResult: () => {
      dispatch(tomatoDeleteActions.TOMATO_DELETE_CLEAR())
    },
    addTomatos: (data) => {
      dispatch(tomatoAddActions.TOMATO_ADD_REQUEST({ data }))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TomatoList)
