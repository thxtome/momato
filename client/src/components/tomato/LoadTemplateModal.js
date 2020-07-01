import React, { useEffect } from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: theme.spacing(4),
    fontSize: 25,
  },
  name: {
    fontSize: '17px',
  },
  nameSpan: {
    display: 'block',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const LoadTemplateModal = ({
  isLogin,
  isTomatoAddSucceed,
  addTomatos,
  getTomatoList,
  clearAddResult,
  onClose,
  templates,
}) => {
  useEffect(() => {
    if (isLogin) {
      if (!isTomatoAddSucceed) {
        return;
      }
      getTomatoList({
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        templateIdx: null,
      });
      clearAddResult();
    }
  }, [isTomatoAddSucceed]);
  const classes = useStyles();
  const data = {
    createType: 'copy',
    templateIdx: null,
  };
  const tomatoAddRequest = data => {
    addTomatos(data);
    onClose();
  };
  return (
    <>
      <Typography className={classes.title}>텃밭 불러오기</Typography>
      <Typography id='transition-modal-description' />
      {templates.map(template => (
        <span key={template.templateIdx} className={classes.nameSpan}>
          <Button
            data-idx={template.templateIdx}
            className={classes.name}
            onClick={e => {
              data.templateIdx = e.currentTarget.dataset.idx;
              tomatoAddRequest(data);
            }}
          >
            <SaveAltIcon className={classes.icon} />
            {template.templateName}
          </Button>
        </span>
      ))}
    </>
  );
};

export default LoadTemplateModal;
