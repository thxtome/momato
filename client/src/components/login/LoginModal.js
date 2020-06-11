import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles, Typography, Button, Avatar } from "@material-ui/core"
import Modals from "../common/Modal"
import { required } from "../../lib/validation"

const useStyles = makeStyles((theme) => ({
  idDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },

  passDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(0.5),
  },

  titleId: {
    marginRight: theme.spacing(5),
  },

  titlePass: {
    marginRight: theme.spacing(3),
  },

  button: {
    margin: "auto",
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

  btnDiv: {
    display: "flex",
    marginBottom: theme.spacing(3),
    flexDirection: "row-reverse",
  },
  text: {
    width: theme.spacing(22),
    "& > *": {
      [theme.breakpoints.down("650")]: {
        fontSize: 13,
      },
    },
  },
}))

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return { value, onChange }
}

const LoginModal = ({ login, onClose }) => {
  let date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
  const templateIdx = 0
  const data = {
    date,
    templateIdx,
  }
  const classes = useStyles()
  const email = useInput("")
  const pass = useInput("")
  const loginRequest = () => {
    if (required(email.value, "아이디")) {
      login({
        memberId: email.value,
        memberPass: pass.value,
      })
      onClose()
    }
  }

  return (
    <>
      <Avatar className={classes.tomatoImg} src="/images/homeMade.png" />
      <Typography className={classes.tomatoText} variant="h5">
        TOMATO
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.idDiv}>
          <Typography className={classes.titleId}>아이디</Typography>
          <TextField
            className={classes.text}
            id="standard-textarea"
            label=""
            placeholder="example@tomato.com"
            multiline
            autoFocus
            {...email}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                document.getElementById("pass").focus()
              }
            }}
          />
        </div>
        <div className={classes.passDiv}>
          <Typography className={classes.titlePass}>비밀번호</Typography>
          <TextField
            className={classes.text}
            id="pass"
            label=""
            type="password"
            autoComplete="current-password"
            placeholder="password"
            {...pass}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                document.getElementById("loginButton").click()
              }
            }}
          />
        </div>
        <div className={classes.btnDiv}>
          <Modals type="pass" />
          <Modals type="signupInLogin" />
        </div>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="secondary"
            id="loginButton"
            onClick={() => {
              loginRequest()
            }}
          >
            로그인
          </Button>
        </div>
      </form>
    </>
  )
}

export default LoginModal
