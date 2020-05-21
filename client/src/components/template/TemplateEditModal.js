import React, { useState, useEffect } from "react"
import { Button, makeStyles, TextField } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: 30,
  },
  edit: {
    display: "block",
    marginBottom: theme.spacing(3),
    "& > *": {
      width: theme.spacing(50),
      [theme.breakpoints.down("650")]: {
        width: theme.spacing(25),
        fontSize: 12,
      },
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
  const template = props.template
  const NAME_CHARACTER_LIMIT = 15
  const COMMENT_CHARACTER_LIMIT = 25
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
          inputProps={{
            maxLength: NAME_CHARACTER_LIMIT,
          }}
          helperText={`${name.value.length}/${NAME_CHARACTER_LIMIT}`}
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
          inputProps={{
            maxLength: COMMENT_CHARACTER_LIMIT,
          }}
          helperText={`${comment.value.length}/${COMMENT_CHARACTER_LIMIT}`}
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
