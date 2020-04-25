import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Template from "../components/template/Template";
import Tomato from "../components/tomato/Tomato";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

let template = {templateInx: 1, templateName: "텃밭1", templateContent: "이 밭은 대대로 물려받은 텃밭입니다."}
let tomatos = ['1번 토마토','2번 토마토','3번 토마토','4번 토마토','5번 토마토'];
const Templates = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Template template={template} key={template.templateInx}></Template>
      {tomatos.map((tomato,index) => <Tomato name={tomato} key={index}/>)}
    </div>
  );
};

export default Templates;
