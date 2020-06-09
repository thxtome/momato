import React, { useState, useEffect } from "react"
import { Avatar, makeStyles, Typography, TextField, Button } from "@material-ui/core"
import { toast } from "react-toastify"
import { required, checkPass, comparePass } from "../../lib/validation"

const useStyles = makeStyles((theme) => ({
  div: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },

  nameDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
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

const InfoModal = (props) => {
  const inputMemberName = useInput(props.loginReducer.memberInfo.memberName)
  const inputMemberPass = useInput("")
  const inputMemberPassChk = useInput("")
  const CHARACTER_LIMIT = 10
  const classes = useStyles()

  const memberUpdateBtn = () => {
    //비밀번호 확인과 일치하면 수정요청을 보내고 아니면 일치하지 않는다고 메세지를 띄운다
    if (
      required(inputMemberName.value, "닉네임") &&
      checkPass(inputMemberPass.value) &&
      comparePass(inputMemberPass.value, inputMemberPassChk.value)
    ) {
      props.memberUpdateRequest({
        memberName: inputMemberName.value,
        memberPass: inputMemberPass.value,
      })
    }
  }

  useEffect(() => {
    //수정이 성공하면 메세지 띄우고
    if (props.memberUpdateReducer.isUpdateSucceed) {
      toast.info("수정이 완료되었습니다.", {
        position: toast.POSITION.TOP_CENTER,
      })
      //업데이트 성공 여부를 클리어하고
      props.memberUpdateClear()
      //모달을 닫는다.
      props.onClose()
    }
  })

  return (
    <>
      <Avatar className={classes.tomatoImg} src="/images/homeMade.png" />
      <Typography className={classes.tomatoText} variant="h5">
        TOMATO
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.nameDiv}>
          <Typography className={classes.name}>닉네임</Typography>
          <TextField
            className={classes.text}
            id="standard-textarea"
            label=""
            placeholder="nickname"
            multiline
            autoFocus
            inputProps={{
              maxLength: CHARACTER_LIMIT,
            }}
            helperText={`${inputMemberName.value.length}/${CHARACTER_LIMIT}`}
            onChange={inputMemberName.onChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                document.getElementById("pass").focus()
              }
            }}
            {...inputMemberName}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.pass}>비밀번호</Typography>
          <TextField
            className={classes.text}
            id="pass"
            label=""
            type="password"
            placeholder="password"
            onChange={inputMemberPass.onChange}
            InputProps={{
              className: classes.inputPass,
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                document.getElementById("passConfirm").focus()
              }
            }}
            {...inputMemberPass}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.confirm}>비밀번호 확인</Typography>
          <TextField
            className={classes.text}
            id="passConfirm"
            label=""
            type="password"
            placeholder="password"
            onChange={inputMemberPassChk.onChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                document.getElementById("button").click()
              }
            }}
            {...inputMemberPassChk}
          />
        </div>
        <div className={classes.button}>
          <Button
            id="button"
            variant="contained"
            color="secondary"
            onClick={() => {
              memberUpdateBtn()
            }}
          >
            수정
          </Button>
        </div>
      </form>
    </>
  )
}

export default InfoModal
