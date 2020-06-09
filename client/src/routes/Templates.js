import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TemplateContainer from "../containers/template/TemplateContainer"
import TomatoListContainer from "../containers/tomato/TomatoListContainer"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const Templates = (props) => {
  useEffect(() => {
    if (props.templateDeleteReducer.isTemplateDeleteSucceed) {
      props.history.push("/")
    } else if (!props.loginReducer.isLogin) {
      props.history.push("/")
    }
  }, [props.loginReducer.isLogin, props.templateDeleteReducer.isTemplateDeleteSucceed])
  let template = props.location.state.template
  if (!props.location.state.template) {
    template = props.location
  }
  useEffect(() => {}, [template])
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TemplateContainer history={props.history} template={template} key={template.templateIdx} />
      <TomatoListContainer templateIdx={template.templateIdx} />
    </div>
  )
}

export default Templates
