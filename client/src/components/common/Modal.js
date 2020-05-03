import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TemplateModal from "../template/TemplateModal";
import TomatoEditModal from "../tomato/TomatoEditModal";
import PassModal from "../member/PassModal";
import InfoModal from "../member/InfoModal";
import SignupModalContainer from "../../containers/member/SignupModalContainer";
import LoginModalContainer from "../../containers/login/LoginModalContainer";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import TomatoAddModalContainer from "../../containers/tomato/TomatoAddModalContainer";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1900,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: "none",
    borderRadius: 5,
    outline: "none",
  },
  templateBtn: {
    fontSize: 30,
  },
  edit: {
    paddingBottom: theme.spacing(1),
    display: "block",
    width: theme.spacing(60),
    marginBottom: theme.spacing(3),
  },
  editbtn: {
    margin: theme.spacing("auto"),
    textAlign: "center",
  },
  passbtn: {
    fontSize: 5,
  },
  addBtn: {
    margin: theme.spacing(1, "auto"),
    textAlign: "center"
  }
}));

export default function TransitionsModal({ type, template, name }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {type === "template" ? (
        <Button
          className={classes.templateBtn}
          type="button"
          onClick={handleOpen}
        >
          {template.templateName}
        </Button>
      ) : type === "tomatoEdit" ? (
        <Button
          className={classes.tomatoBtn}
          type="button"
          onClick={handleOpen}
        >
          {name}
        </Button>
      ) : type === "login" ? (
        <Button className={classes.loginBtn} type="button" onClick={handleOpen}>
          로그인
        </Button>
      ) : type === "signup" ? (
        <Button
          className={classes.siginupBtn}
          type="button"
          onClick={handleOpen}
        >
          회원가입
        </Button>
      ) : type === "pass" ? (
        <Button className={classes.passBtn} type="button" onClick={handleOpen}>
          비밀번호 찾기
        </Button>
      ) : type === "info" ? (
        <Button className={classes.infoBtn} type="button" onClick={handleOpen}>
          회원정보 수정
        </Button>
      ) : type === "tomatoAdd" ? (
        <div className={classes.addBtn}>
          <Button className={classes.addBtn} type="button" onClick={handleOpen}>
            <AddCircleRoundedIcon />
            토마토 추가
          </Button>
        </div>
      ) : (
        <></>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {type === "template" ? (
              <TemplateModal template={template} />
            ) : type === "tomatoEdit" ? (
              <TomatoEditModal name={name} />
            ) : type === "login" ? (
              <LoginModalContainer onClose={handleClose} />
            ) : type === "signup" ? (
              <SignupModalContainer />
            ) : type === "pass" ? (
              <PassModal />
            ) : type === "info" ? (
              <InfoModal /> 
            ) : type === "tomatoAdd" ? (
              <TomatoAddModalContainer />
            ) : (
              <></>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
