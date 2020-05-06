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
  console.log(props);
  let tomatos = [];

  const makeTempTomatos = () => {
    let tempTomatos = [];
    let tempTomato = {};
    for (let i = 0; i < sessionStorage.length; i++) {
      tempTomato = JSON.parse(sessionStorage.getItem(String(i)));
      tempTomatos.push(tempTomato);
    }
    tomatos = tempTomatos;
    console.log(tomatos);
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      props.getTomatoList(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      );
      if (props.tomatoDeleteReducer.isTomatoDeleteSucceed) {
        props.getTomatoList(
          new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        );
        props.clearDeleteResult();
      }
    } else {
      makeTempTomatos();
    }
  }, []);

  if (localStorage.getItem("auth")) {
    tomatos = props.tomatoReducer.tomatos;
  } else {
    makeTempTomatos();
  }

  const classes = useStyles();
  console.log(tomatos);
  return (
    <div className={classes.root}>
      <TomatoCnt tomatos={tomatos}></TomatoCnt>
      {tomatos &&
        tomatos.map((tomato) => (
          <Tomato
            tomatoDelete={props.tomatoDelete}
            {...tomato}
            key={tomato.tomatoIdx}
          />
        ))}
      <Modals type="tomatoAdd"></Modals>
    </div>
  );
};

export default TomatoList;
