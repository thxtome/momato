import React, { useState, useEffect } from "react"
import { Input, Button, makeStyles, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: 30,
  },
  edit: {
    display: "block",
    marginBottom: theme.spacing(3),
    "& > *": {
      width: theme.spacing(50),
    },
  },
  editbtn: {
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

const TemplateEditModal = (props) => {
  console.log(props)
  const template = props.template
  const classes = useStyles()
  const name = useInput(template.templateName)
  const comment = useInput(template.templateComment)

  useEffect(() => {
    props.getTemplateList()
  }, [props.templateEditReducer.isTemplateEditSucceed])

  const templateEditRequest = () => {
    const data = {
      templateIdx: template.templateIdx,
      templateName: name.value,
      templateComment: comment.value,
    }
    props.editTemplate(data)
    props.onClose()
  }
  return (
    <>
      <h2 id="transition-modal-title">텃밭 고치기</h2>
      <div>
        <TextField
          autoFocus
          type="name"
          className={classes.edit}
          defaultValue={template.templateName}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              document.getElementById("comment").focus()
            }
          }}
          {...name}
        />
      </div>
      <div>
        <TextField
          id="comment"
          className={classes.edit}
          defaultValue={template.templateComment}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              document.getElementById("addBtn").focus()
            }
          }}
          {...comment}
        />
      </div>
      <div className={classes.editbtn}>
        <Button id="addBtn" variant="contained" color="secondary" onClick={templateEditRequest}>
          수정
        </Button>
      </div>
    </>
  )
}

export default TemplateEditModal
