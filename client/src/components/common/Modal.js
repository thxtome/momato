import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Button from "@material-ui/core/Button"
import GrainIcon from "@material-ui/icons/Grain"
import EventNoteIcon from "@material-ui/icons/EventNote"
import TemplateEditModalContainer from "../../containers/template/TemplateEditModalContainer"
import FindPassModalContainer from "../../containers/member/FindPassModalContainer"
import InfoModalContainer from "../../containers/member/InfoModalContainer"
import SignupModalContainer from "../../containers/member/SignupModalContainer"
import LoginModalContainer from "../../containers/login/LoginModalContainer"
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded"
import TomatoAddModalContainer from "../../containers/tomato/TomatoAddModalContainer"
import TomatoEditModalContainer from "../../containers/tomato/TomatoEditModalContainer"
import { ListItemText, ListItemIcon, ListItem } from "@material-ui/core"
import TemplateAddModalContainer from "../../containers/template/TemplateAddModalContainer"
import LoadTemplateModal from "../tomato/LoadTemplateModal"
import WithdrawModalContainer from "../../containers/member/WithdrawModalContainer"

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
  edit: {
    paddingBottom: theme.spacing(1),
    display: "block",
    width: theme.spacing(60),
    marginBottom: theme.spacing(3),
  },
  addBtn: {
    margin: theme.spacing(1, "auto"),
    textAlign: "center",
  },
  infoBtn: {
    textTransform: "none",
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
  tomatoBtn: {
    textTransform: "none",
    [theme.breakpoints.down("650")]: {
      fontSize: 12,
    },
  },
  templateBtn: {
    fontWeight: "bold",
    fontSize: 30,
    textTransform: "none",
    "& > *": {
      [theme.breakpoints.down("650")]: {
        fontSize: 18,
        margin: theme.spacing(0),
        padding: theme.spacing(0),
      },
    },
  },
  loadBtn: {
    textAlign: "right",
    fontWeight: "bold",
  },
  inLoginBtn: {
    padding: 0,
    "& > *": {
      fontSize: "11px",
      color: "grey",
    },
  },
  withdraw: {
    color: "black",
  },
}))

export default function TransitionsModal({
  type,
  template,
  index,
  name,
  fullRegular,
  fullBreak,
  templateIdx,
  tomatoCanStart,
  addTomatos,
  templates,
  onClose,
  history,
}) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.root}>
      {type === "template" ? (
        <Button className={classes.templateBtn} type="button" onClick={handleOpen}>
          {template.templateName}
        </Button>
      ) : type === "tomatoEdit" ? (
        <Button className={classes.tomatoBtn} type="button" onClick={handleOpen}>
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
      ) : type === "signupInLogin" ? (
        <Button className={classes.inLoginBtn} type="button" onClick={handleOpen}>
          회원가입
        </Button>
      ) : type === "pass" ? (
        <Button className={classes.inLoginBtn} type="button" onClick={handleOpen}>
          비밀번호 찾기
        </Button>
      ) : type === "info" ? (
        <Button className={classes.infoBtn} type="button" onClick={handleOpen}>
          {name}
        </Button>
      ) : type === "withdraw" ? (
        <Button className={classes.withdraw} type="button" onClick={handleOpen}>
          회원탈퇴
        </Button>
      ) : type === "tomatoAdd" ? (
        <div className={classes.addBtn}>
          <Button className={classes.addBtn} type="button" onClick={handleOpen}>
            <AddCircleRoundedIcon />
            토마토 추가
          </Button>
        </div>
      ) : type === "loadTemplate" ? (
        <div className={classes.loadBtn}>
          <Button className={classes.loadBtn} type="button" onClick={handleOpen}>
            텃밭 불러오기
          </Button>
        </div>
      ) : type === "loginForTemplate" ? (
        <ListItem button onClick={handleOpen}>
          <ListItemIcon>
            <GrainIcon />
          </ListItemIcon>
          <ListItemText primary="토마토 텃밭" />
        </ListItem>
      ) : type === "loginForCalendar" ? (
        <ListItem button onClick={handleOpen}>
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="토마토 달력" />
        </ListItem>
      ) : type === "loginForTemplateInMenu" ? (
        <ListItem button onClick={handleOpen}>
          <ListItemText primary="토마토 텃밭" />
        </ListItem>
      ) : type === "loginForCalendarInMenu" ? (
        <ListItem button onClick={handleOpen}>
          <ListItemText primary="토마토 달력" />
        </ListItem>
      ) : (
        <div className={classes.addTemplateBtn}>
          <Button className={classes.addTemplateBtn} type="button" onClick={handleOpen}>
            <ListItemIcon>
              <AddCircleRoundedIcon />
            </ListItemIcon>
            <ListItemText onClick={onClose} primary="텃밭 만들기" />
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
              <TemplateEditModalContainer history={history} template={template} onClose={handleClose} />
            ) : type === "tomatoEdit" ? (
              <TomatoEditModalContainer
                templateIdx={templateIdx}
                index={index}
                name={name}
                fullRegular={fullRegular}
                fullBreak={fullBreak}
                onClose={handleClose}
                tomatoCanStart={tomatoCanStart}
              />
            ) : type === "login" ? (
              <LoginModalContainer onClose={handleClose} />
            ) : type === "pass" ? (
              <FindPassModalContainer onClose={handleClose} />
            ) : type === "signup" ? (
              <SignupModalContainer onClose={handleClose} />
            ) : type === "signupInLogin" ? (
              <SignupModalContainer onClose={handleClose} />
            ) : type === "info" ? (
              <InfoModalContainer onClose={handleClose} />
            ) : type === "withdraw" ? (
              <WithdrawModalContainer onClose={handleClose} />
            ) : type === "tomatoAdd" ? (
              <TomatoAddModalContainer templateIdx={templateIdx} onClose={handleClose} />
            ) : type === "loadTemplate" ? (
              <LoadTemplateModal addTomatos={addTomatos} templates={templates} onClose={handleClose} />
            ) : type === "loginForTemplate" ? (
              <LoginModalContainer onClose={handleClose} />
            ) : type === "loginForCalendar" ? (
              <LoginModalContainer onClose={handleClose} />
            ) : type === "loginForTemplateInMenu" ? (
              <LoginModalContainer onClose={handleClose} />
            ) : type === "loginForCalendarInMenu" ? (
              <LoginModalContainer onClose={handleClose} />
            ) : (
              <TemplateAddModalContainer onClose={handleClose} />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
