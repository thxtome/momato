import React, { useState } from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { required } from '../../lib/validation';

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: 30,
  },
  div: {
    [theme.breakpoints.down('650')]: {
      marginBottom: theme.spacing(1),
    },
  },
  content: {
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
  editBtn: {
    margin: 'auto',
    textAlign: 'center',
    '& > *': {
      [theme.breakpoints.down('650')]: {
        fontSize: 12,
      },
    },
  },
}));

const useInput = initVal => {
  const [value, setValue] = useState(initVal);
  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const TemplateModal = ({ addTemplate, onClose }) => {
  const classes = useStyles();
  const NAME_CHARACTER_LIMIT = 15;
  const COMMENT_CHARACTER_LIMIT = 50;
  const templateName = useInput('');
  const templateComment = useInput('');

  const templateAddRequest = () => {
    // 텃밭이름 유효성 확인
    if (required(templateName.value, '텃밭 이름')) {
      const data = {
        templateName: templateName.value,
        templateComment: templateComment.value,
      };

      addTemplate(data);
      onClose();
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2 id='transition-modal-title'>텃밭 만들기</h2>
          <div className={classes.div}>
            <TextField
              autoFocus
              className={classes.content}
              placeholder='텃밭 이름'
              inputProps={{
                maxLength: NAME_CHARACTER_LIMIT,
              }}
              helperText={`${templateName.value.length}/${NAME_CHARACTER_LIMIT}`}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  document.getElementById('comment').focus();
                }
              }}
              {...templateName}
            />
          </div>
          <div className={classes.div}>
            <TextField
              id='comment'
              className={classes.content}
              placeholder='텃밭 코멘트'
              inputProps={{
                maxLength: COMMENT_CHARACTER_LIMIT,
              }}
              helperText={`${templateComment.value.length}/${COMMENT_CHARACTER_LIMIT}`}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  document.getElementById('editBtn').click();
                }
              }}
              {...templateComment}
            />
          </div>
          <div className={classes.editBtn}>
            <Button id='editBtn' variant='contained' color='secondary' onClick={templateAddRequest}>
              만들기
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateModal;
