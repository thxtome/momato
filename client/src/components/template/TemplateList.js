import React, { useEffect, useState, useCallback } from 'react';
import GrainIcon from '@material-ui/icons/Grain';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles, useMediaQuery, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  title: {
    '& > *': {
      fontSize: 13,
    },
  },
  linkText: {
    fontSize: 15,
    width: theme.spacing(18),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: 20,
    fontFamily: 'JSDongkang-Regular',
  },
  clieckedItem: {
    backgroundColor: '#ccc',
  },
  listText: {
    '& > *': {
      fontSize: '18px',
      fontFamily: 'JSDongkang-Regular',
    },
  },
}));

const useInput = initVal => {
  const [value, setValue] = useState(initVal);
  return { value };
};

export default function TemplateList({
  isTemplateAddSucceed,
  isTemplateEditSucceed,
  isTemplateDeleteSucceed,
  clieckedIndex,
  getTemplateList,
  clearAddResult,
  clearEditResult,
  clearDeleteResult,
  setClieckedIndex = () => {},
  onClose = () => {},
  templates,
}) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:800px)');
  const [open, setOpen] = useState(false);
  // 텃밭추가 시 텃밭리스트 불러오기
  useEffect(() => {
    if (isTemplateAddSucceed) {
      getTemplateList();
      clearAddResult();
    }
  }, [isTemplateAddSucceed, getTemplateList, clearAddResult]);

  // 텃밭수정 시 텃밭리스트 불러오기
  useEffect(() => {
    if (isTemplateEditSucceed) {
      getTemplateList();
      clearEditResult();
    }
  }, [isTemplateEditSucceed]);

  // 텃밭삭제 시 텃밭리스트 불러오기
  useEffect(() => {
    if (isTemplateDeleteSucceed) {
      getTemplateList();
      clearDeleteResult();
      setClieckedIndex(0);
    }
  }, [isTemplateDeleteSucceed]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        {matches ? (
          <ListItemIcon>
            <GrainIcon />
          </ListItemIcon>
        ) : (
          ''
        )}
        <ListItemText className={classes.listText} primary='토마토 텃밭' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {templates.map((template, index) => (
            <Link
              className={classes.link}
              key={index}
              to={{
                pathname: `template`,
                state: {
                  template,
                },
              }}
            >
              <ListItem
                button
                className={clieckedIndex === index + 2 ? classes.clieckedItem : ''}
                onClick={() => {
                  // sidebar의 setClickedIndex
                  setClieckedIndex(index + 2);
                  onClose();
                }}
              >
                <ListItemIcon>
                  <LocalFloristIcon />
                </ListItemIcon>
                <ListItemText className={classes.title}>
                  <Typography noWrap className={classes.linkText}>
                    {template.templateName}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </div>
  );
}
