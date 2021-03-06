import React, { useState, useEffect } from 'react';
import { Avatar, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import { required, checkPass, comparePass } from '../../lib/validation';
import Modals from '../common/Modal';

const useStyles = makeStyles(theme => ({
  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },

  nameDiv: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0),
  },

  name: {
    marginRight: theme.spacing(10),
  },

  pass: {
    marginRight: theme.spacing(8),
  },

  confirm: {
    marginRight: theme.spacing(3.5),
  },

  button: {
    margin: 'auto',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 20,
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
  passWord: {
    width: theme.spacing(22),
    '& > *': {
      fontFamily: 'Roboto',
      fontSize: 13,
      [theme.breakpoints.down('650')]: {
        fontSize: 12,
      },
    },
  },
  editBtn: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    '& > *': {
      width: theme.spacing(7),
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

const InfoModal = ({
  isLogin,
  isUpdateSucceed,
  editMemberRequest,
  getMemberInfo,
  clearEditMemberResult,
  onClose,
  memberInfo,
}) => {
  const inputMemberName = useInput(memberInfo.memberName);
  const inputMemberPass = useInput('');
  const inputMemberPassChk = useInput('');
  const CHARACTER_LIMIT = 10;
  const classes = useStyles();

  const memberUpdateBtn = () => {
    //비밀번호 확인과 일치하면 수정요청을 보내고 아니면 일치하지 않는다고 메세지를 띄운다
    if (
      required(inputMemberName.value, '닉네임') &&
      checkPass(inputMemberPass.value, 'edit') &&
      comparePass(inputMemberPass.value, inputMemberPassChk.value)
    ) {
      editMemberRequest({
        memberName: inputMemberName.value,
        memberPass: inputMemberPass.value,
      });
    }
  };

  useEffect(() => {
    //수정이 성공하면 메세지 띄우고
    if (isUpdateSucceed) {
      toast.info('수정이 완료되었습니다.', {
        position: toast.POSITION.TOP_CENTER,
      });
      //업데이트 성공 여부를 클리어하고
      getMemberInfo();
      clearEditMemberResult();
      //모달을 닫는다.
      onClose();
    }
  });

  return (
    <>
      <Avatar className={classes.tomatoImg} src='/images/homeMade.png' />
      <Typography className={classes.tomatoText} variant='h5'>
        MOMATO
      </Typography>
      <form className={classes.root} noValidate autoComplete='off'>
        <div className={classes.nameDiv}>
          <Typography className={classes.name}>닉네임</Typography>
          <TextField
            className={classes.text}
            id='standard-textarea'
            label=''
            placeholder='nickname'
            multiline
            autoFocus
            inputProps={{
              maxLength: CHARACTER_LIMIT,
            }}
            helperText={`${inputMemberName.value.length}/${CHARACTER_LIMIT}`}
            onChange={inputMemberName.onChange}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('pass').focus();
              }
            }}
            {...inputMemberName}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.pass}>비밀번호</Typography>
          <TextField
            className={classes.passWord}
            id='pass'
            label=''
            type='password'
            placeholder='password'
            onChange={inputMemberPass.onChange}
            InputProps={{
              className: classes.inputPass,
            }}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('passConfirm').focus();
              }
            }}
            {...inputMemberPass}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.confirm}>비밀번호 확인</Typography>
          <TextField
            className={classes.passWord}
            id='passConfirm'
            label=''
            type='password'
            placeholder='password'
            onChange={inputMemberPassChk.onChange}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('button').click();
              }
            }}
            {...inputMemberPassChk}
          />
        </div>
        <div className={classes.button}>
          <Button
            className={classes.editBtn}
            id='button'
            variant='contained'
            color='secondary'
            onClick={() => {
              memberUpdateBtn();
            }}
          >
            수정
          </Button>
          <Modals type='withdraw' />
        </div>
      </form>
    </>
  );
};

export default InfoModal;
