import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tomato from "../components/tomato/Tomato";
import TomatoCnt from "../components/tomato/TomatoCnt";
import Modals from "../components/common/Modal";
import TomatoContainer from "../containers/tomato/TomatoContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

let tomatos = ['1번 토마토','2번 토마토','3번 토마토','4번 토마토','5번 토마토']

const Tomatos = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TomatoCnt></TomatoCnt>
      <TomatoContainer />
      {tomatos.map((tomato,index) => <Tomato name={tomato} key={index}/>)}
      <Modals type="tomatoAdd"></Modals>
    </div>
  );
};

export default Tomatos;
