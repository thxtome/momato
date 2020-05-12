import React, { useState } from "react"
import { makeStyles, TextField, Typography, Button, Avatar } from "@material-ui/core"

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
}))

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return { value, onChange }
}

const FindPassModal = (props) => {
  const classes = useStyles()
  const memberId = useInput("")
  const findPassRequest = () => {
    const data = {
      memberId: memberId.value,
    }
    props.sendTempPass(memberId.value)
    props.onClose()
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
          <TextField id="standard-textarea" label="" placeholder="example@tomato.com" multiline autoFocus {...memberId} />
        </div>
        <div className={classes.button}>
          <Button variant="contained" color="secondary" onClick={findPassRequest}>
            메일 전송
          </Button>
        </div>
      </form>
    </>
  )
}

export default FindPassModal
