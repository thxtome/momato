import { connect } from "react-redux"
import { tomatoAddActions } from "../../store/modules/tomatoAdd.js"
import { tomatoActions } from "../../store/modules/tomato.js"
import LoadTemplateModal from "../../components/tomato/LoadTemplateModal.js"

const mapStateToProps = (state) => {
  const { isTomatoAddSucceed } = state.tomatoAddReducer
  return { isTomatoAddSucceed }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTomatos: (data) => {
      dispatch(tomatoAddActions.TOMATO_ADD_REQUEST({ data }))
    },
    getTomatoList: (data) => {
      dispatch(tomatoActions.TOMATO_REQUEST({ data }))
    },
    clearAddResult: () => {
      dispatch(tomatoAddActions.TOMATO_ADD_CLEAR())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadTemplateModal)
