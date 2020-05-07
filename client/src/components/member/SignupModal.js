import React, { useState } from "react";
import {
  Avatar,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

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
    margin: theme.spacing("auto"),
    textAlign: "center",
  },

  tomatoImg: {
    display: "block",
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(0, "auto"),
  },

  tomatoText: {
    display: "block",
    width: theme.spacing(15),
    margin: theme.spacing(3, "auto"),
  },
}));

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const SignupModal = (props) => {
  const classes = useStyles();

  const email = useInput("");
  const pass = useInput("");
  const name = useInput("");

  const singupRequest = () => {
    const member = {
      memberId: email.value,
      memberPass: pass.value,
      memberName: name.value,
    };
    props.signup(member);
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
            autoFocus 
            {...email}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.titleId}>닉네임</Typography>
          <TextField
            id="standard-textarea"
            label=""
            placeholder="nickname"
            multiline
            {...name}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.titlePass}>비밀번호</Typography>
          <TextField
            id="standard-password-input"
            label=""
            type="password"
            placeholder="password"
            {...pass}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                document.getElementById("signinButton").click();
              }
            }}
          />
        </div>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="secondary"
            id="signinButton"
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
