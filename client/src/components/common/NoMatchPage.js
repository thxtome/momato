import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    fontSize: '0.9rem',
    color: 'black',
  },
  content: {
    width: theme.spacing(30),
    height: 'min-content',
    marginBottom: theme.spacing(1.2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bubble: {
    position: 'relative',
    width: 150,
    height: 'max-content',
    padding: 10,
    background: '#FFFFFF',
    '-webkit-border-radius': 10,
    '-moz-border-radius': 10,
    'border-radius': 10,
    border: 'rgb(255, 42, 64,0.65) solid 3px',
    marginBottom: '10px',
  },
  pointer: {
    left: '120px',
    bottom: '-15px',
    content: '',
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: '15px 15px 0',
    borderColor: '#FFFFFF transparent',
    display: 'block',
    width: 0,
    zIndex: 1,
  },

  pointerBorder: {
    content: '',
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: '17px 17px 0',
    borderColor: 'rgb(255, 42, 64,0.65) transparent',
    display: 'block',
    width: 0,
    zIndex: 0,
    bottom: '-20px',
    left: '118px',
  },

  characterImg: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  imgBox: {
    display: 'flex',
    width: theme.spacing(20),
    justifyContent: 'center',
  },
}));

const NoMatchPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.bubble}>
          <Box className={classes.pointer}></Box>
          <Box className={classes.pointerBorder}></Box>
          <Typography variant={'body1'} className={classes.msg}>
            페이지를 못 찾겠어요.. 404! 404! 404!
          </Typography>
        </Box>
        <Box className={classes.imgBox}>
          <Avatar className={classes.characterImg} src='/images/ketchup.jpg' />
        </Box>
      </Box>
    </Box>
  );
};

export default NoMatchPage;
