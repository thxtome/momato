import { connect } from "react-redux"
import { memberUpdateActions } from "../../store/modules/memberUpdate.js"
import InfoModal from "../../components/member/InfoModal.js"

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    memberUpdateRequest: (member) => {
      dispatch(memberUpdateActions.MEMBER_UPDATE_REQUEST({ member }))
    },
    memberUpdateClear: () => {
      dispatch(memberUpdateActions.MEMBER_UPDATE_SUCCEED_CLEAR())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoModal)
