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
  console.log(props.loginReducer)
  useEffect(() => {
      if (localStorage.getItem("auth")){
        props.getTomatoList(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
        props.clearDeleteResult();
    } else {
      props.getTempTomatoList();
    }
  }, [props.tomatoDeleteReducer.isTomatoDeleteSucceed]);
    const tomatos = props.tomatoReducer.tomatos;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TomatoCnt tomatos={tomatos}></TomatoCnt>
      {tomatos &&
        tomatos.map((tomato) => (
          <Tomato
            tomatoDelete={props.tomatoDelete}
            getTomatoList={props.getTomatoList}
            getTempTomatoList={props.getTempTomatoList}
            {...tomato}
            key={tomato.tomatoIdx}
          />
        ))}
      <Modals type="tomatoAdd"></Modals>
    </div>
  );
};

export default TomatoList;
