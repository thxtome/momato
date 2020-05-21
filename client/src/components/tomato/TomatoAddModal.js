import React, { useState, useEffect } from "react"
import { makeStyles, Button, TextField, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  addTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    "& > *": {
      [theme.breakpoints.down("650")]: {
        fontSize: 11,
      },
    },
  },

  textField: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    "& > *": {
      [theme.breakpoints.down("650")]: {
        fontSize: 12,
      },
    },
  },

  title: {
    marginRight: theme.spacing(20),
  },

  button: {
    display: "block",
    margin: theme.spacing(1, "auto"),
    textAlign: "center",
    "& > *": {
      [theme.breakpoints.down("650")]: {
        fontSize: 11,
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

const TomatoAddModal = (props) => {
  const { isTomatoAddSucceed, isLogin } = props
  const CHARACTER_LIMIT = 15
  let templateIdx = props.templateIdx ? props.templateIdx : 0
  let date = templateIdx ? "" : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)

  useEffect(() => {
    if (isLogin) {
      const data = {
        date,
        templateIdx,
      }
      props.getTomatos(data)
      props.clearAddResult()
    }
  }, [isTomatoAddSucceed])

  const classes = useStyles()
  const createType = useInput("simple")
  const tomatoName = useInput("")
  const tomatoAddRequest = () => {
    //로그인이면 서버로 요청을 보냄
    if (isLogin) {
      const data = {
        createType: createType.value,
        tomatoName: tomatoName.value,
        templateIdx: props.templateIdx,
      }
      props.tomatoAdd(data)
    } else {
      //아니면 임시 토마토를 액션에 넣어서 스토어에 요청을 보냄
      const tempTomato = {
        tomatoName: tomatoName.value,
        template: 0,
        tomatoCanStart: 1,
        tomatoDate: new Date(),
        tomatoEndTime: 0,
        tomatoStartTime: 0,
        tomatoFullRegular: 1500,
        tomatoLeftRegular: 1500,
        tomatoFullBreak: 300,
        tomatoLeftBreak: 300,
      }
      props.addTempTomato(tempTomato)
      props.getTempTomatoList()
    }
    props.onClose()
  }

  return (
    <>
      <Typography className={classes.addTitle} id="transition-modal-title">
        토마토 추가
      </Typography>
      <TextField
        className={classes.textField}
        id="standard-textarea"
        className={classes.textField}
        placeholder="토마토 이름"
        multiline
        autoFocus
        inputProps={{
          maxLength: CHARACTER_LIMIT,
        }}
        helperText={`${tomatoName.value.length}/${CHARACTER_LIMIT}`}
        {...tomatoName}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            document.getElementById("addButton").click()
          }
        }}
      />
      <span className={classes.button}>
        <Button
          variant="contained"
          color="secondary"
          id="addButton"
          onClick={() => {
            tomatoAddRequest()
          }}
        >
          추가
        </Button>
      </span>
    </>
  )
}

export default TomatoAddModal
