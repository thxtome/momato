import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TomatoListContainer from "../containers/tomato/TomatoListContainer";
import TomatoList from "../components/tomato/TomatoList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const Tomatos = () => {
  return <TomatoListContainer /> 
};

export default Tomatos;
