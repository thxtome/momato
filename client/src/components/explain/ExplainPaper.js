import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(47deg, #FF416C 0%, #FF4B2B 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width: 60,
    height: 20,
    fontSize: '0.7rem',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const useStyles = makeStyles(theme => ({
  msgBox: {
    transition: '1s',
    position: 'absolute',
    width: 300,
    height: 'min-content',
    zIndex: 1310,
    background: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    borderRadius: 5,
    padding: 10,
    boxSizing: 'border-box',
    justifyContent: 'center',
  },
  titleAndCloseBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'min-content',
    marginBottom: theme.spacing(0.5),
  },
  title: {},
  closeBtn: {},
  content: {
    width: '100%',
    height: 'min-content',
    marginBottom: theme.spacing(1.2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    height: 'min-content',
    marginBottom: theme.spacing(0.5),
  },
  closeBtn: {
    width: 30,
    border: 'none',
    background: 'none',
    fontSize: '1.5rem',
    '&:hover': {
      opacity: 0.5,
    },
  },
}));

const Explain = props => {
  const { msgBoxPosition, msg, step, next, prev, close, isLast } = props;
  console.log(props);
  const classes = useStyles();
  return (
    <Box className={classes.msgBox} style={msgBoxPosition}>
      <Box className={classes.titleAndCloseBtn}>
        <Typography variant={'h6'} className={classes.title}>
          제목
        </Typography>
        <button onClick={close} className={classes.closeBtn}>
          x
        </button>
      </Box>
      <Box className={classes.content}>
        <Typography variant={'body1'}>{msg}</Typography>
      </Box>
      <Box className={classes.buttons}>
        <StyledButton onClick={prev} disabled={step === 0 ? true : false}>
          이전
        </StyledButton>
        {isLast ? <StyledButton onClick={close}>닫기</StyledButton> : <StyledButton onClick={next}>다음</StyledButton>}
      </Box>
    </Box>
  );
};

export default Explain;
