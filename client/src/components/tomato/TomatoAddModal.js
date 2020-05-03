import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Input,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  div: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },

  title: {
    marginRight: theme.spacing(20),
  },

  button: {
    margin: theme.spacing(1, "auto"),
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
      props.getTomatos(new Date());
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
  };

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector("button").click();
    }
  };

  return (
    <>
      <h2 id="transition-modal-title">토마토 추가</h2>
      <p id="transition-modal-description">
        <form className={classes.root} noValidate autoComplete="off">
          <div className={classes.div}>
            <TextField
              id="standard-textarea"
              label=""
              placeholder="토마토 이름"
              multiline
              {...tomatoName}
            />
          </div>
          <div className={classes.button}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                tomatoAddRequest();
              }}
              onKeyUp={() => {
                onKeyPress();
              }}
            >
              추가
            </Button>
          </div>
        </form>
      </p>
    </>
  );
};

export default TomatoAddModal;
