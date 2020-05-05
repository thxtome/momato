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
  useEffect(() => {
    if (props.tomatoAddReducer.isTomatoAddSucceed) {
      props.getTomatos(new Date(Date.now() - new Date().getTimezoneOffset() * 60000));
      props.clearAddResult();
    }
  });

  const classes = useStyles();
  const createType = useInput("simple");
  const tomatoName = useInput("");

  const tomatoAddRequest = () => {
    const data = {
      createType: createType.value,
      tomatoName: tomatoName.value,
    };
    props.tomatoAdd(data);
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
