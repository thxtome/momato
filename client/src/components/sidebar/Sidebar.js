import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MemberContainer from '../../containers/member/MemberContainer';
import { Link } from 'react-router-dom';
import Modals from '../common/Modal';
import TemplateListContainer from '../../containers/template/TemplateListContainer';

const drawerWidth = 270;

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  userGrade: {
    alignSelf: 'center',
    marginBottom: theme.spacing(2),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  gradeComment: {
    color: '#999',
    alignSelf: 'center',
  },
  userId: {
    alignSelf: 'center',
  },
  clieckedItem: {
    backgroundColor: '#ccc',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  linkText: {
    '& > *': {
      fontSize: '18px',
    },
  },
  addTemplate: {
    marginLeft: theme.spacing(2),
    width: theme.spacing(25),
    cursor: 'pointer',
  },
}));

const useInput = initVal => {
  const [value, setValue] = useState(initVal);
  return { value };
};

const Sidebar = ({ isLogin }) => {
  const classes = useStyles();
  const [clieckedIndex, setClieckedIndex] = useState(0);

  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <MemberContainer />
      <div className={classes.drawerContainer}>
        <List>
          {isLogin ? (
            ['오늘의 토마토', '토마토 달력'].map((text, index) => (
              <Link className={classes.link} key={text} to={index === 0 ? 'tomato' : index === 1 ? 'calendar' : ''}>
                <ListItem
                  button
                  className={clieckedIndex === index ? classes.clieckedItem : ''}
                  onClick={() => {
                    setClieckedIndex(index);
                  }}
                >
                  <ListItemIcon>
                    {index === 0 ? <CheckCircleIcon /> : index === 1 ? <EventNoteIcon /> : ''}
                  </ListItemIcon>
                  <ListItemText className={classes.linkText} primary={text} />
                </ListItem>
              </Link>
            ))
          ) : (
            <>
              <ListItem
                button
                className={clieckedIndex === 0 ? classes.clieckedItem : ''}
                onClick={() => setClieckedIndex(0)}
              >
                <ListItemIcon>
                  <CheckCircleIcon />{' '}
                </ListItemIcon>
                <ListItemText className={classes.linkText} primary={'오늘의 토마토'} />
              </ListItem>
              <Modals type='loginForCalendar' />
              <Modals type='loginForTemplate' />
            </>
          )}
          {isLogin ? (
            <>
              <TemplateListContainer clieckedIndex={clieckedIndex} setClieckedIndex={setClieckedIndex} />
              <ListItem className={classes.addTemplate}>
                <Modals type='addTemplate' />
              </ListItem>
            </>
          ) : (
            ''
          )}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
