import React, { useState, useEffect } from "react"
import { Input, Button, makeStyles, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: 30,
  },
  content: {
    display: "block",
    marginBottom: theme.spacing(3),
    "& > *": {
      width: theme.spacing(50),
    },
  },
  addBtn: {
    margin: "auto",
    textAlign: "center",
  },
}))

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal)
  const onChange = (e) => {
    setValue(e.target.value)
  }
  return { value, onChange }
}

const TemplateModal = (props) => {
  const classes = useStyles()
  const templateName = useInput("")
  const templateComment = useInput("")

  useEffect(() => {
    props.getTemplateList()
    props.clearAddResult()
  }, [props.templateAddReducer.isTemplateAddSucceed])

  const templateAddRequest = () => {
    const data = {
      templateName: templateName.value,
      templateComment: templateComment.value,
    }
    props.addTemplate(data)
    props.onClose()
  }

  return (
    <>
      <h2 id="transition-modal-title">텃밭 만들기</h2>
      <div>
        <TextField
          autoFocus
          className={classes.content}
          placeholder="텃밭 이름"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              document.getElementById("comment").focus()
            }
          }}
          {...templateName}
        />
      </div>
      <div>
        <TextField
          id="comment"
          className={classes.content}
          placeholder="텃밭 코멘트"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              document.getElementById("editBtn").click()
            }
          }}
          {...templateComment}
        />
      </div>
      <div className={classes.addBtn}>
        <Button id="editBtn" variant="contained" color="secondary" onClick={templateAddRequest}>
          만들기
        </Button>
      </div>
    </>
  )
}

export default TemplateModal
