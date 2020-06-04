import React, { useState } from "react"
import { Avatar, makeStyles, Typography, TextField, Button } from "@material-ui/core"
import { isEmail, required, checkPass } from "../../lib/validation"

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

const SignupModal = (props) => {
  const classes = useStyles()

  const email = useInput("")
  const pass = useInput("")
  const name = useInput("")

  const singupRequest = () => {
    if (
      required(email.value, "아이디") &&
      isEmail(email.value) &&
      required(name.value, "닉네임") &&
      required(pass.value, "비밀번호") &&
      checkPass(pass.value)
    ) {
      props.signup({
        memberId: email.value,
        memberPass: pass.value,
        memberName: name.value,
      })
      props.onClose()
    }
  }
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
            className={classes.text}
            label=""
            placeholder="example@tomato.com"
            multiline
            autoFocus
            {...email}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                document.getElementById("text").focus()
              }
            }}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.titleId}>닉네임</Typography>
          <TextField
            id="text"
            className={classes.text}
            label=""
            placeholder="nickname"
            multiline
            {...name}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                document.getElementById("pass").focus()
              }
            }}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.titlePass}>비밀번호</Typography>
          <TextField
            className={classes.text}
            id="pass"
            label=""
            type="password"
            placeholder="password"
            {...pass}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                document.getElementById("signinButton").click()
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
              singupRequest()
            }}
          >
            회원가입
          </Button>
        </div>
      </form>
    </>
  )
}

export default SignupModal
