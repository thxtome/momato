import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    textAlign: 'center',
    zIndex: 1900,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circular: {
    '& > *': {
      opacity: 0.5,
    },
  },
}));
// 로딩시 화면
const Load = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress className={classes.circular} color='secondary' />
    </Box>
  );
};

export default Load;
