import React, { useRef, useState, useEffect } from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import RootRef from '@material-ui/core/RootRef';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(47deg, #FF416C 0%, #FF4B2B 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width: 80,
    height: 30,
    fontSize: '0.8rem',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const useStyles = makeStyles(theme => ({
  msgBox: {
    transition: '1s',
    position: 'absolute',
    width: 380,
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

  title: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },

  msg: {
    fontSize: '0.9rem',
    color: 'white',
  },

  content: {
    width: '100%',
    height: 'min-content',
    marginBottom: theme.spacing(1.2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    top: -4,
    position: 'relative',
    width: 30,
    border: 'none',
    background: 'none',
    fontSize: '1.3rem',
    '&:hover': {
      opacity: 0.5,
    },
  },

  bubble: {
    position: 'relative',
    width: 250,
    height: 'max-content',
    padding: 10,
    background: 'rgb(255, 42, 64,0.65)',
    '-webkit-border-radius': 10,
    '-moz-border-radius': 10,
    'border-radius': 10,
  },

  pointer: {
    left: '-15px',
    top: '-30',
    content: '',
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: '15px 15px 15px 0',
    borderColor: 'transparent rgb(255, 42, 64,0.65)',
    display: 'block',
    width: 0,
    zIndex: 1,
  },

  characterImg: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: theme.spacing(1),
  },

  imgBox: {
    display: 'flex',
    width: theme.spacing(20),
    justifyContent: 'center',
  },
}));

const ExplainPaper = props => {
  const bubble = useRef();
  const [bubbleHeight, setBubbleHeight] = useState(null);
  useEffect(() => {
    if (bubble.current) {
      setBubbleHeight(bubble.current.clientHeight);
    }
  });

  const { msgBoxPosition, title, msg, step, next, prev, close, isLast } = props;
  const classes = useStyles();
  return (
    <Box className={classes.msgBox} style={msgBoxPosition}>
      <Box className={classes.titleAndCloseBtn}>
        <Typography variant={'h6'} className={classes.title}>
          {title}
        </Typography>
        <button onClick={close} className={classes.closeBtn}>
          x
        </button>
      </Box>

      <Box className={classes.content}>
        <Box className={classes.imgBox}>
          <Avatar className={classes.characterImg} src='/images/tomatoChar.png' />
        </Box>
        <RootRef rootRef={bubble}>
          <Box className={classes.bubble} ref={bubble}>
            <Box className={classes.pointer} style={{ top: (bubbleHeight - 30) / 2 }}></Box>
            <Typography variant={'body1'} className={classes.msg}>
              {msg}
            </Typography>
          </Box>
        </RootRef>
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

export default ExplainPaper;
