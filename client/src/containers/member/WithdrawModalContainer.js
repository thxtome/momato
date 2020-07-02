import { connect } from 'react-redux';
import { withdrawActions } from '../../store/modules/withdraw.js';
import { loginActions } from '../../store/modules/login.js';
import WithdrawModal from '../../components/member/WithdrawModal.js';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    withdrawRequest: () => {
      dispatch(withdrawActions.WITHDRAW_REQUEST());
    },
    withdrawSucceedClear: () => {
      dispatch(withdrawActions.WITHDRAW_SUCCEED_CLEAR());
    },
    clearLogoutResult: () => {
      dispatch(loginActions.LOGOUT_SUCCEEDED());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawModal);
