import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tomato from "../components/tomato/Tomato";
import TomatoCnt from "../components/tomato/TomatoCnt";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

let tomatos = ['1번 토마토','2번 토마토','3번 토마토','4번 토마토','5번 토마토']

const Tomatos = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TomatoCnt></TomatoCnt>
      {tomatos.map((tomato,index) => <Tomato name={tomato} key={index}/>)}
    </div>
  );
};

export default Tomatos;
