import React, { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { required } from '../../lib/validation';

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: 30,
  },
  edit: {
    display: 'block',
    marginBottom: theme.spacing(3),
    '& > *': {
      width: theme.spacing(50),
      [theme.breakpoints.down('650')]: {
        width: theme.spacing(25),
        fontSize: 12,
      },
    },
  },
  editbtn: {
    margin: 'auto',
    textAlign: 'center',
  },
}));

const useInput = initVal => {
  const [value, setValue] = useState(initVal);
  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const TemplateEditModal = ({ history, editTemplate,  onClose, template }) => {
  const NAME_CHARACTER_LIMIT = 15;
  const COMMENT_CHARACTER_LIMIT = 25;
  const classes = useStyles();
  const name = useInput(template.templateName);
  const comment = useInput(template.templateComment);

  const templateEditRequest = () => {
    if (required(name.value, '텃밭 이름')) {
      const data = {
        templateIdx: template.templateIdx,
        templateName: name.value,
        templateComment: comment.value,
      };
      template = data;
      editTemplate(data);
      onClose();
      // 텃밭 수정시 해당 텃밭으로 이동
      history.push({ state: { template } }, `template`);
      // 텃밭목록 다시 그리기
    }
  };
  return (
    <>
      <h2 id='transition-modal-title'>텃밭 고치기</h2>
      <div>
        <TextField
          autoFocus
          type='name'
          className={classes.edit}
          value={template.templateName}
          inputProps={{
            maxLength: NAME_CHARACTER_LIMIT,
          }}
          helperText={`${name.value.length}/${NAME_CHARACTER_LIMIT}`}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              document.getElementById('comment').focus();
            }
          }}
          {...name}
        />
      </div>
      <div>
        <TextField
          id='comment'
          className={classes.edit}
          value={template.templateComment}
          inputProps={{
            maxLength: COMMENT_CHARACTER_LIMIT,
          }}
          helperText={`${comment.value.length}/${COMMENT_CHARACTER_LIMIT}`}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              document.getElementById('addBtn').focus();
            }
          }}
          {...comment}
        />
      </div>
      <div className={classes.editbtn}>
        <Button id='addBtn' variant='contained' color='secondary' onClick={templateEditRequest}>
          수정
        </Button>
      </div>
    </>
  );
};

export default TemplateEditModal;
