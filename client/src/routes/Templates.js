import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Template from "../components/template/Template";
import Tomato from "../components/tomato/Tomato";
import Modals from "../components/common/Modal";
import TomatoListContainer from "../containers/tomato/TomatoListContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Templates = (props) => {
  const template = props.location.state.template;
  console.log(template.templateIdx);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Template template={template} key={template.templateIdx} />
      <TomatoListContainer templateIdx={template.templateIdx}/>
    </div>
  );
};

export default Templates;
