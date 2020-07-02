import React, { useEffect } from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { toast } from 'react-toastify';

const useStyles = makeStyles(theme => ({
  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(3, 'auto', 0),
    textAlign: 'center',
  },
  withdrawBtn: {
    marginRight: theme.spacing(2),
    '& > *': {
      fontSize: 12,
    },
  },
  cancelBtn: {
    '& > *': {
      fontSize: 12,
    },
  },
}));

const WithdrawModal = props => {
  const classes = useStyles();
  const withDrawRequest = () => {
    props.withdrawRequest();
  };
  const close = () => {
    props.onClose();
  };
  useEffect(() => {
    if (props.withdrawReducer.isWithdrawSucceed) {
      toast.info('회원탈퇴 되었습니다.', {
        position: toast.POSITION.TOP_CENTER,
      });
      props.clearLogoutResult();
      props.withdrawSucceedClear();
      props.onClose();
    }
  });

  return (
    <>
      <Typography className={classes.withdraw} variant='h6'>
        탈퇴 하시겠습니까?
      </Typography>
      <div className={classes.button}>
        <Button
          className={classes.withdrawBtn}
          id='button'
          variant='contained'
          color='secondary'
          onClick={withDrawRequest}
        >
          탈퇴
        </Button>
        <Button className={classes.cancelBtn} variant='outlined' color='secondary' onClick={close}>
          취소
        </Button>
      </div>
    </>
  );
};

export default WithdrawModal;
