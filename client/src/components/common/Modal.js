import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TemplateEditModalContainer from "../../containers/template/TemplateEditModalContainer";
import PassModal from "../member/PassModal";
import InfoModalContainer from "../../containers/member/InfoModalContainer";
import SignupModalContainer from "../../containers/member/SignupModalContainer";
import LoginModalContainer from "../../containers/login/LoginModalContainer";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import TomatoAddModalContainer from "../../containers/tomato/TomatoAddModalContainer";
import TomatoEditModalContainer from "../../containers/tomato/TomatoEditModalContainer";
import { ListItemText, ListItemIcon } from "@material-ui/core";
import TemplateAddModalContainer from "../../containers/template/TemplateAddModalContainer";

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
  passbtn: {
    fontSize: 5,
  },
  addBtn: {
    margin: theme.spacing(1, "auto"),
    textAlign: "center",
  },
  infoBtn: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
  tomatoBtn: {
    textTransform: "none",
  },
  templateBtn: {
    fontWeight: "bold",
    fontSize: "30px",
    textTransform: "none",
  },
}));

export default function TransitionsModal({
  type,
  template,
  index,
  name,
  fullRegular,
  fullBreak,
  templateIdx,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
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
        <Button className={classes.infoBtn} type="button" onClick={handleOpen}>
          {name ? name : "LOGIN"}
        </Button>
      ) : type === "signup" ? (
        <Button className={classes.infoBtn} type="button" onClick={handleOpen}>
          SIGNUP
        </Button>
      ) : type === "pass" ? (
        <Button className={classes.passBtn} type="button" onClick={handleOpen}>
          비밀번호 찾기
        </Button>
      ) : type === "info" ? (
        <Button className={classes.infoBtn} type="button" onClick={handleOpen}>
          {name}
        </Button>
      ) : type === "tomatoAdd" ? (
        <div className={classes.addBtn}>
          <Button className={classes.addBtn} type="button" onClick={handleOpen}>
            <AddCircleRoundedIcon />
            토마토 추가
          </Button>
        </div>
      ) : (
        <div className={classes.addBtn}>
          <Button className={classes.addBtn} type="button" onClick={handleOpen}>
            <ListItemIcon>
              <AddCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="텃밭 만들기" />
          </Button>
        </div>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {type === "template" ? (
              <TemplateEditModalContainer
                template={template}
                onClose={handleClose}
              />
            ) : type === "tomatoEdit" ? (
              <TomatoEditModalContainer
                templateIdx={templateIdx}
                index={index}
                name={name}
                fullRegular={fullRegular}
                fullBreak={fullBreak}
                onClose={handleClose}
              />
            ) : type === "login" ? (
              <LoginModalContainer onClose={handleClose} />
            ) : type === "signup" ? (
              <SignupModalContainer onClose={handleClose} />
            ) : type === "pass" ? (
              <PassModal onClose={handleClose} />
            ) : type === "info" ? (
              <InfoModalContainer onClose={handleClose} />
            ) : type === "tomatoAdd" ? (
              <TomatoAddModalContainer
                templateIdx={templateIdx}
                onClose={handleClose}
              />
            ) : (
              <TemplateAddModalContainer onClose={handleClose} />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
