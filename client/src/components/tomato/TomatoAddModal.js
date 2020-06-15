import React, { useState, useEffect } from "react";
import { makeStyles, Button, TextField, Typography } from "@material-ui/core";
import { required } from "../../lib/validation";

const useStyles = makeStyles((theme) => ({
  addTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },

  textField: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    "& > *": {
      width: theme.spacing(35),
    },
  },

  title: {
    marginRight: theme.spacing(20),
  },

  button: {
    display: "block",
    margin: theme.spacing(1, "auto"),
    textAlign: "center",
  },
}));

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const TomatoAddModal = ({
  isLogin,
  templateIdx,
  isTomatoAddSucceed,
  addTomato,
  addTempTomato,
  getTempTomatoList,
  onClose,
  getTomatoList,
  clearAddResult,
}) => {
  const CHARACTER_LIMIT = 15;

  const classes = useStyles();
  const createType = useInput("simple");
  const tomatoName = useInput("");

  // 토마토 추가 시 토마토목록 다시 불러오기
  useEffect(() => {
    if (isLogin) {
      if (isTomatoAddSucceed === false) {
        return;
      }
      getTomatoList({
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        templateIdx: templateIdx,
      });
      clearAddResult();
      onClose();
    }
  }, [isTomatoAddSucceed]);

  const tomatoAddRequest = () => {
    //로그인이면 서버로 요청을 보냄
    if (required(tomatoName.value, "토마토 이름")) {
      if (isLogin) {
        const data = {
          createType: createType.value,
          tomatoName: tomatoName.value,
          templateIdx: templateIdx,
        };
        addTomato(data);
      } else {
        //아니면 임시 토마토를 액션에 넣어서 스토어에 요청을 보냄
        const tempTomato = {
          tomatoName: tomatoName.value,
          template: 0,
          tomatoCanStart: 1,
          tomatoDate: new Date(),
          tomatoEndTime: 0,
          tomatoStartTime: 0,
          tomatoFullRegular: 1500,
          tomatoLeftRegular: 1500,
          tomatoFullBreak: 300,
          tomatoLeftBreak: 300,
        };
        addTempTomato(tempTomato);
        getTempTomatoList();
        onClose();
      }
    }
  };

  return (
    <>
      <Typography className={classes.addTitle} id="transition-modal-title">
        토마토 추가
      </Typography>
      <TextField
        className={classes.textField}
        id="standard-textarea"
        placeholder="토마토 이름"
        multiline
        autoFocus
        inputProps={{
          maxLength: CHARACTER_LIMIT,
        }}
        helperText={`${tomatoName.value.length}/${CHARACTER_LIMIT}`}
        {...tomatoName}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            document.getElementById("addButton").click();
          }
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
