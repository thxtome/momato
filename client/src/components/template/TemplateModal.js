import React, { useState } from "react";
import { Input, Button, makeStyles } from "@material-ui/core";

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

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);
  const onChange = (e) => {
      setValue(e.target.value);
  };
  return {value, onChange};
};

const TemplateModal = (props) => {
  console.log(props);
  const template = props.template;
    const classes = useStyles();
    const templateName = useInput(template.templateName);
    const templateComment = useInput(template.templateComment);
    const templateEditRequest = () => {
      const data = {
        templateIdx: template.templateIdx,
        templateName: templateName.value,
        templateComment: templateComment.value,
      }
      props.editTemplate(data);
      props.onClose();

    }
    return (
        <>
        <h2 id="transition-modal-title">
        텃밭 고치기
        </h2>
        <p id="transition-modal-description">
            <Input autoFocus className={classes.edit} defaultValue={template.templateName} inputProps={{ 'aria-label': 'description' }} />
            <Input className={classes.edit}  defaultValue={template.templateComment} inputProps={{ 'aria-label': 'description' }} />
            <div className={classes.editbtn}>
                <Button 
                variant="contained" 
                color="secondary"
                onClick={templateEditRequest}>수정</Button>
            </div>
        </p>
        </>
    );
};

export default TemplateModal;