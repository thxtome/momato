import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
},
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: "none",
    borderRadius:5,
    outline: "none"
  },
  button: {
    fontSize: 30,
  },
  edit: {
    paddingBottom: theme.spacing(1),
    display: "block",
    width: theme.spacing(60),
    marginBottom: theme.spacing(3)
  },
  editbtn: {
      margin: theme.spacing("auto"),
      textAlign: "center"
  }
}));

export default function TransitionsModal({template}) {
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
      <Button className={classes.button} type="button" onClick={handleOpen}>
        {template.templateName}
      </Button>
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
            <h2 id="transition-modal-title">
                텃밭 고치기
            </h2>
            <p id="transition-modal-description">
            <form noValidate autoComplete="off">
                <Input className={classes.edit} defaultValue={template.templateName} inputProps={{ 'aria-label': 'description' }} />
                <Input className={classes.edit}  defaultValue={template.templateContent} inputProps={{ 'aria-label': 'description' }} />
                <div className={classes.editbtn}>
                    <Button variant="contained" color="secondary">수정</Button>
                </div>
            </form>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}