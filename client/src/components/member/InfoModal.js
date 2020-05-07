import React, { useState, useEffect } from "react";
import {
  Avatar,
  makeStyles,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  div: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },

  name: {
    marginRight: theme.spacing(10),
  },

  pass: {
    marginRight: theme.spacing(8),
  },

  confirm: {
    marginRight: theme.spacing(3.5),
  },

  button: {
    margin: "auto",
    textAlign: "center",
  },

  tomatoImg: {
    display: "block",
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(0, "auto"),
  },

  tomatoText: {
    display: "block",
    width: theme.spacing(15),
    margin: theme.spacing(3, "auto"),
  },
}));

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const InfoModal = (props) => {
  const inputMemberName = useInput("");
  const inputMemberPass = useInput("");
  const inputMemberPassChk = useInput("");
  const classes = useStyles();

  const memberUpdateBtn = () => {
    //비밀번호 확인과 일치하면 수정요청을 보내고 아니면 일치하지 않는다고 메세지를 띄운다
    if (inputMemberPass.value === inputMemberPassChk.value) {
      props.memberUpdateRequest({
        memberName: inputMemberName.value,
        memberPass: inputMemberPass.value,
      });
    } else {
      toast.info("비밀번호가 일치하지 않습니다.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    //수정이 성공하면 메세지 띄우고
    if (props.memberUpdateReducer.isUpdateSucceed) {
      toast.info("수정이 완료되었습니다.", {
        position: toast.POSITION.TOP_CENTER,
      });
      //업데이트 성공 여부를 클리어하고
      props.memberUpdateClear();
      //모달을 닫는다.
      props.onClose();
    }
  });

  return (
    <>
      <Avatar className={classes.tomatoImg} src="/images/homeMade.png" />
      <Typography className={classes.tomatoText} variant="h5">
        TOMATO
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.div}>
          <Typography className={classes.name}>닉네임</Typography>
          <TextField
            id="standard-textarea"
            label=""
            placeholder="nickname"
            multiline
            autoFocus
            onChange={inputMemberName.onChange}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.pass}>비밀번호</Typography>
          <TextField
            id="standard-password-input"
            label=""
            type="password"
            placeholder="password"
            onChange={inputMemberPass.onChange}
          />
        </div>

        <div className={classes.div}>
          <Typography className={classes.confirm}>비밀번호 확인</Typography>
          <TextField
            id="standard-password-input"
            label=""
            type="password"
            placeholder="password"
            onChange={inputMemberPassChk.onChange}
          />
        </div>
        <div className={classes.button}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              memberUpdateBtn();
            }}
          >
            수정
          </Button>
        </div>
      </form>
    </>
  );
};

export default InfoModal;
