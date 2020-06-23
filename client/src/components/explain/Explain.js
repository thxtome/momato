import React, { useState, useLayoutEffect } from 'react';
import { makeStyles, Box } from '@material-ui/core';
import ExplainPaper from './ExplainPaper';

const useStyles = makeStyles(theme => ({
  drop: {
    position: 'absolute',
    textAlign: 'center',
    zIndex: 1300,
    background: 'black',
    opacity: 0.3,
  },
}));

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

// 로딩시 화면
const ExplainWrapper = ({ finishExplain }) => {
  const classes = useStyles();
  const [width, height] = useWindowSize();
  const [step, setStep] = useState(0);
  const position = [
    {
      msgBox: { top: height / 2 - 150 > 0 ? height / 2 - 150 : 0, left: width / 2 - 150 },
      top: { top: 0, left: 0, width: '100%', height: '100%' },
      bottom: { top: '350px', left: 0, width: '0', height: '0' },
      left: { top: -20000, left: -20000, width: '0', height: '0' },
      right: { top: 0, left: '270px', width: '0', height: '0' },
    },
    {
      msgBox: { top: height - 100 > 302 ? 302 : height - 100, left: 300 },
      top: { top: 0, left: 0, width: '270px', height: '302px' },
      bottom: { top: '350px', left: 0, width: '270px', height: height - 350 },
      left: { top: -20000, left: -20000, width: '100%', height: '100%' },
      right: { top: 0, left: '270px', width: width - 270, height: '100%' },
    },
    {
      msgBox: { top: 350, left: 300 },
      top: { top: 0, left: 0, width: '270px', height: '350px' },
      bottom: { top: '398px', left: 0, width: '270px', height: height - 398 },
      left: { top: -20000, left: -20000, width: '100%', height: '100%' },
      right: { top: 0, left: '270px', width: width - 270, height: '100%' },
    },
    {
      msgBox: { top: 398, left: 300 },
      top: { top: 0, left: 0, width: '270px', height: '398px' },
      bottom: { top: '446px', left: 0, width: '270px', height: height - 446 },
      left: { top: -20000, left: -20000, width: '100%', height: '100%' },
      right: { top: 0, left: '270px', width: width - 270, height: '100%' },
    },
    {
      msgBox: { top: 200, left: (width - 5) / 2 },
      top: { top: 0, left: 0, width: '100%', height: 90 },
      bottom: { top: 169, left: 0, width: '100%', height: height - 169 > 208 ? height - 169 : 208 },
      left: { top: 90, left: 0, width: 295, height: 79 },
      right: { top: 90, left: height - 169 > 208 ? width - 25 : width - 42, width: 25, height: 79 },
    },
    {
      msgBox: { top: 300, left: (width - 5) / 2 },
      top: { top: 0, left: 0, width: '100%', height: 231 },
      bottom: { top: 285, left: 0, width: '100%', height: height - 285 > 208 ? height - 285 : 208 },
      left: { top: 231, left: 0, width: 295, height: 54 },
      right: { top: 231, left: height - 285 > 208 ? width - 25 : width - 42, width: 25, height: 54 },
    },
  ];
  const titleArr = ['모마토란?', '내용2', '내용3', '내용4', '내용5', '내용6'];
  const msgArr = ['뽀모도로 기법을 활용한 일정관리 사이트입니다. 사용자가 지정한 일정을 실행하고 끝나면 알람으로 알려드립니다.', '내용2', '내용3', '내용4', '내용5', '내용6'];
  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    setStep(step - 1);
  };
  const close = () => {
    finishExplain();
  };
  const props = {
    msgBoxPosition: position[step].msgBox,
    msg: msgArr[step],
    title: titleArr[step],
    step,
    next,
    prev,
    close,
    isLast: step === position.length - 1,
  };
  return (
    <Box className={classes.root}>
      <ExplainPaper {...props} />
      <Box className={classes.drop} style={position[step].top}></Box>
      <Box className={classes.drop} style={position[step].bottom}></Box>
      <Box className={classes.drop} style={position[step].left}></Box>
      <Box className={classes.drop} style={position[step].right}></Box>
    </Box>
  );
};

export default ExplainWrapper;
