import React, { useState, useEffect } from 'react';
import { Avatar, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import { isEmail, required, checkPass } from '../../lib/validation';
import { toast } from 'react-toastify';

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
    marginBottom: theme.spacing(1),
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
  pass: {
    width: theme.spacing(22),
    '& > *': {
      fontSize: 13,
      fontFamily: 'Roboto',
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

const SignupModal = ({ isSignupSucceed, signup, clearSignupResult, onClose }) => {
  const classes = useStyles();
  const CHARACTER_LIMIT = 10;

  const email = useInput('');
  const pass = useInput('');
  const name = useInput('');
  useEffect(() => {
    if (isSignupSucceed) {
      toast.info('회원가입에 성공하였습니다.', {
        position: toast.POSITION.TOP_CENTER,
      });
      clearSignupResult();
      onClose();
    }
  }, [isSignupSucceed]);

  const singupRequest = () => {
    if (
      required(email.value, '아이디') &&
      isEmail(email.value) &&
      required(name.value, '닉네임') &&
      required(pass.value, '비밀번호') &&
      checkPass(pass.value, 'signup')
    ) {
      signup({
        memberId: email.value,
        memberPass: pass.value,
        memberName: name.value,
      });
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
            label=''
            placeholder='example@tomato.com'
            multiline
            autoFocus
            {...email}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('text').focus();
              }
            }}
          />
        </div>

        <div className={classes.nameDiv}>
          <Typography className={classes.titleId}>닉네임</Typography>
          <TextField
            id='text'
            className={classes.text}
            label=''
            placeholder='nickname'
            multiline
            inputProps={{
              maxLength: CHARACTER_LIMIT,
            }}
            helperText={`${name.value.length}/${CHARACTER_LIMIT}`}
            {...name}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('pass').focus();
              }
            }}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.titlePass}>비밀번호</Typography>
          <TextField
            className={classes.pass}
            id='pass'
            label=''
            type='password'
            placeholder='password'
            {...pass}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('signinButton').click();
              }
            }}
          />
        </div>
        <div className={classes.button}>
          <Button
            variant='contained'
            color='secondary'
            id='signinButton'
            onClick={() => {
              singupRequest();
            }}
          >
            회원가입
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignupModal;
