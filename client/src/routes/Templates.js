import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TemplateContainer from "../containers/template/TemplateContainer"
import Tomato from "../components/tomato/Tomato"
import Modals from "../components/common/Modal"
import TomatoListContainer from "../containers/tomato/TomatoListContainer"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const Templates = (props) => {
  console.log(props)
  const template = props.location.state.template
  useEffect(() => {}, [template])
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TemplateContainer template={template} key={template.templateIdx} />
      <TomatoListContainer templateIdx={template.templateIdx} />
    </div>
  )
}

export default Templates
