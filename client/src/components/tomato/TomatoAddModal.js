import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },

  title: {
    marginRight: theme.spacing(20),
  },

  button: {
    display: "block",
    margin: theme.spacing(2, "auto"),
    textAlign: "center",
  },

  select: {
    width: "40%",
  },
}));

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const TomatoAddModal = (props) => {
  const addTempTomato = () => {
    const tempTomato = {
      "template": 0,
      "tomatoCanStart": 0,
      "tomatoDate": new Date(),
      "tomatoEndTime": 0,
      "tomatoStartTime": 0,
      "tomatoFullRegular": 1500,
      "tomatoLeftRegular": 1500,
      "tomatoFullBreak": 300,
      "tomatoLeftBreak": 300,
    };
    if (localStorage.getItem("key")){
      localStorage.setItem("key", Number(localStorage.getItem("key")) + 1);
    } else {
      localStorage.setItem("key", 0);
    };
    tempTomato.tomatoIdx = Number(localStorage.getItem("key"));
    tempTomato.tomatoName = tomatoName.value;
    sessionStorage.setItem(tempTomato.tomatoIdx, JSON.stringify(tempTomato));
  };

  useEffect(() => {
    if (localStorage.getItem("auth")){
      props.getTomatos(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
      props.clearAddResult();
    } else {
      props.getTempTomatoList();
    }
  },[props.tomatoAddReducer.isTomatoAddSucceed]);

  const classes = useStyles();
  const createType = useInput("simple");
  const tomatoName = useInput("");
  const tomatoAddRequest = () => {
    if (localStorage.getItem("auth")){
      const data = {
        createType: createType.value,
        tomatoName: tomatoName.value,
      };
      props.tomatoAdd(data);
    } else {
      addTempTomato();
      props.getTempTomatoList();
    }
    props.onClose();
  };

  return (
    <>
      <h2 id="transition-modal-title">토마토 추가</h2>
      <Typography id="transition-modal-description"/>
            <TextField
              id="standard-textarea"
              className={classes.textField}
              label=""
              placeholder="토마토 이름"
              multiline
              autoFocus 
              {...tomatoName}
              onKeyPress={(e) => {
                if(e.key === "Enter"){
                  e.preventDefault();
                  document.getElementById("addButton").click();
                };
              }}
            />
          <span className={classes.button}>
            <Button
              variant="contained"
              color="secondary"
              id="addButton"
              onClick={() => {
                tomatoAddRequest();
              }}
            >
              추가
            </Button>
          </span>
    </>
  );
};

export default TomatoAddModal;
