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
  useEffect(() => {
    props.getTomatoList(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
  }, []);
  useEffect(() => {
    if (props.tomatoDeleteReducer.isTomatoDeleteSucceed) {
      props.getTomatos(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
      props.clearDeleteResult();
    }
});
  const classes = useStyles();
  const tomatos = props.tomatoReducer.tomatos;

  return (
    <div className={classes.root}>
      <TomatoCnt></TomatoCnt>
      {tomatos &&
        tomatos.map((tomato) => (
          <Tomato 
          tomatoDelete={props.tomatoDelete} 
          {...tomato} 
          key={tomato.tomatoIdx} />
        ))}
      <Modals type="tomatoAdd"></Modals>
    </div>
  );
};

export default TomatoList;
