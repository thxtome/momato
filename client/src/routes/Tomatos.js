import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TomatoListContainer from "../containers/tomato/TomatoListContainer";
import TomatoList from "../components/tomato/TomatoList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
  const auth =  localStorage.getItem("auth");
  console.log(localStorage.getItem("auth"))
const Tomatos = () => {
  return(
    <>
    {/* {
      localStorage.getItem("auth") == null
      ? <TomatoList /> 
      : <TomatoListContainer />
  } */}
    <TomatoListContainer />
  </>
  ) 
};

export default Tomatos;
