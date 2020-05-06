import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Typography, Button, Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  div: {
    width: "100%",
    display: "flex",
    alignItems: "center",
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
    textAlign: "center",
  },

  tomatoImg: {
    display: "block",
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(0, 'auto'),
  },

  tomatoText: {
    display: "block",
    width: theme.spacing(15),
    margin: theme.spacing(3, 'auto'),
  },

  mButton: {
    fontSize: 15,
  },
}));

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const LoginModal = (props) => {
  useEffect(() => {
    // if (props.loginReducer.isLogin === undefined){
    //   props.getTomatos(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
    // };
  });
  const classes = useStyles();
  const email = useInput("");
  const pass = useInput("");
  const loginRequest = () => {
    const member = {
      memberId: email.value,
      memberPass: pass.value,
    };
    props.login(member)
    // props.getTomatos(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
    props.onClose();
  };

  return (
    <>
      <Avatar className={classes.tomatoImg} src="/images/homeMade.png" />
      <Typography className={classes.tomatoText} variant="h5">
        TOMATO
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.div}>
          <Typography className={classes.titleId}>아이디</Typography>
          <TextField
            id="standard-textarea"
            label=""
            placeholder="example@tomato.com"
            multiline
            {...email}
          />
        </div>
        <div className={classes.div}>
          <Typography className={classes.titlePass}>비밀번호</Typography>
          <TextField
            id="standard-password-input"
            label=""
            type="password"
            autoComplete="current-password"
            placeholder="password"
            {...pass}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                document.getElementById("loginButton").click();
              }
            }}
          />
        </div>
        {/* <div className={classes.mButton}>
                    <Modals type="signup" />
                    <Modals type="pass" />
                </div> */}
        <div className={classes.button}>
          <Button
            variant="contained"
            color="secondary"
            id="loginButton"
            onClick={() => {
              loginRequest();
            }}
          >
            로그인
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginModal;
