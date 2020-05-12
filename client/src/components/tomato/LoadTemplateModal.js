import React, { useEffect } from "react"
import { makeStyles, Button, TextField, Typography } from "@material-ui/core"
import SaveAltIcon from "@material-ui/icons/SaveAlt"

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  name: {
    fontSize: "17px",
  },
  nameSpan: {
    display: "block",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}))

const LoadTemplateModal = (props) => {
  // useEffect(() => {}, [])
  const classes = useStyles()
  const templates = props.templates
  // console.log(document.getElementById("tempalteKey").value)
  const data = {
    createType: "copy",
    templateIdx: null,
  }
  const tomatoAddRequest = (data) => {
    props.addTomatos(data)
    props.onClose()
  }
  return (
    <>
      <h2 className={classes.title}>텃밭 불러오기</h2>
      <Typography id="transition-modal-description" />
      {templates.map((template) => (
        <span key={template.templateIdx} className={classes.nameSpan}>
          <Button
            data-idx={template.templateIdx}
            className={classes.name}
            onClick={(e) => {
              data.templateIdx = e.currentTarget.dataset.idx
              console.log(data)
              tomatoAddRequest(data)
            }}
          >
            <SaveAltIcon className={classes.icon} />
            {template.templateName}
          </Button>
        </span>
      ))}
    </>
  )
}

export default LoadTemplateModal
