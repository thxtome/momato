import React from "react";
import Modals from "../common/Modal";
import { Input, Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  
const TemplateModal = ({template}) => {
    const classes = useStyles();

    return (
        <>
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
        </>
    );
};

export default TemplateModal;