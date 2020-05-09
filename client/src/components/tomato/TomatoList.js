import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tomato from "../tomato/Tomato";
import TomatoCnt from "../tomato/TomatoCnt";
import Modals from "../common/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const TomatoList = (props) => {
  let templateIdx = props.templateIdx;
  let date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
  if (!templateIdx){
    templateIdx = 0;
  } else {
    date = "";
  }
  const data = {
    date,
    templateIdx,
  };
  useEffect(() => {
    if (localStorage.getItem("auth")){
        props.getTomatoList(data);
        props.clearDeleteResult();
    } else {
      props.getTempTomatoList();
    }
  }, [props.tomatoDeleteReducer.isTomatoDeleteSucceed]);
  
  const tomatos = props.tomatoReducer.tomatos;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        templateIdx ? <></> :
        <TomatoCnt tomatos={tomatos}></TomatoCnt>
      }
      {tomatos &&
        tomatos.map((tomato) => (
          <Tomato
            isLogin={props.loginReducer.isLogin}
            tomatoDelete={props.tomatoDelete}
            getTomatoList={props.getTomatoList}
            getTempTomatoList={props.getTempTomatoList}
            {...tomato}
            key={tomato.tomatoIdx}
          />
        ))}
      <Modals templateIdx={props.templateIdx} type="tomatoAdd"></Modals>
    </div>
  );
};

export default TomatoList;
