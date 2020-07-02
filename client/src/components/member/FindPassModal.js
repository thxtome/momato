import React, { useState, useEffect } from 'react';
import { makeStyles, TextField, Typography, Button, Avatar } from '@material-ui/core';
import { required } from '../../lib/validation';
import { toast } from 'react-toastify';

const useStyles = makeStyles(theme => ({
  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },

  titleId: {
    marginRight: theme.spacing(5),
  },

  titlePass: {
    marginRight: theme.spacing(3),
  },

  button: {
    margin: 'auto',
    textAlign: 'center',
  },

  tomatoImg: {
    display: 'block',
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(0, 'auto'),
  },

  tomatoText: {
    display: 'block',
    width: theme.spacing(15),
    margin: theme.spacing(3, 'auto'),
  },
  text: {
    width: theme.spacing(22),
    '& > *': {
      fontSize: 13,
      [theme.breakpoints.down('650')]: {
        fontSize: 12,
      },
    },
  },
}));

const useInput = initVal => {
  const [value, setValue] = useState(initVal);
  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const FindPassModal = ({ isFindPassSucceed, sendTempPass, clearSendPassResult, onClose }) => {
  const classes = useStyles();
  const memberId = useInput('');
  useEffect(() => {
    if (isFindPassSucceed) {
      toast.info('임시 비밀번호가 전송 되었습니다.', {
        position: toast.POSITION.TOP_CENTER,
      });
      clearSendPassResult();
      onClose();
    }
  }, [isFindPassSucceed]);
  const findPassRequest = () => {
    if (required(memberId.value, '아이디')) {
      sendTempPass(memberId.value);
    }
  };

  return (
    <>
      <Avatar className={classes.tomatoImg} src='/images/homeMade.png' />
      <Typography className={classes.tomatoText} variant='h5'>
        MOMATO
      </Typography>
      <form className={classes.root} noValidate autoComplete='off'>
        <div className={classes.div}>
          <Typography className={classes.titleId}>아이디</Typography>
          <TextField
            className={classes.text}
            id='standard-textarea'
            label=''
            placeholder='example@tomato.com'
            multiline
            autoFocus
            {...memberId}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('button').click();
              }
            }}
          />
        </div>
        <div className={classes.button}>
          <Button id='button' variant='contained' color='secondary' onClick={findPassRequest}>
            메일 전송
          </Button>
        </div>
      </form>
    </>
  );
};

export default FindPassModal;
