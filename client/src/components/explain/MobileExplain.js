import React from 'react';
import { makeStyles, Box, Avatar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
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
  buttonBox: {
    position: 'fixed',
    top: 0,
    right: 0,
  },
  button: {
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  arrow1: {
    width: '35px',
    height: '30px',
  },
  menuBox: {
    position: 'fixed',
    display: 'flex',
    color: 'white',
    textAlign: 'left',
    top: 30,
    left: 25,
    '& >*': {
      fontSize: '20px',
      fontFamily: 'SDMiSaeng',
    },
  },
  menuInfo: {
    width: '100%',
    lineHeight: '20px',
    marginTop: '5px',
    wordBreak: 'keep-all',
  },
  arrow2: {
    width: '50px',
    height: '50px',
  },
  tomatoCntBox: {
    position: 'fixed',
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    height: '50px',
    color: 'white',
    top: 150,
    left: 50,
    '& >*': {
      fontSize: '20px',
      fontFamily: 'SDMiSaeng',
    },
  },
  tomatoCntInfo: {
    marginTop: '20px',
  },
  arrow3: {
    width: '60px',
    height: '50px',
  },
  tomatoBox: {
    position: 'fixed',
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    height: '50px',
    color: 'white',
    top: 270,
    left: 20,
    '& >*': {
      fontSize: '20px',
      fontFamily: 'SDMiSaeng',
    },
  },
  tomatoInfo: {
    width: '270px',
    color: 'white',
    textAlign: 'left',
    lineHeight: '20px',
  },
  momatoBox: {
    position: 'fixed',
    textAlign: 'left',
    width: '200px',
    color: 'white',
    top: 350,
    left: 100,
    '& >*': {
      fontFamily: 'SDMiSaeng',
    },
  },
  momatoTitle: {
    lineHeight: '60px',
    fontFamily: 'SDMiSaeng',
    fontSize: '30px',
  },
  momatoInfo: {
    fontSize: '20px',
    wordBreak: 'keep-all',
  },
  tomatoImgBox: {
    display: 'flex',
    textAlign: 'center',
  },
  tomatoImg: {
    width: '60px',
    height: '60px',
  },
}));

// 사이트에 관현 설명
const PageInfo = ({ finishExplain }) => {
  const classes = useStyles();
  const close = () => {
    finishExplain();
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.menuBox}>
        <Avatar className={classes.arrow1} src='/images/arrow_top_left.png' />
        <Typography className={classes.menuInfo}>
          로그인 시 매일 완료한 일정의 수(달력), 저장된 일정 템플릿(텃밭)을 사용할 수 있습니다.
        </Typography>
      </Box>
      <Box className={classes.tomatoCntBox}>
        <Avatar className={classes.arrow2} src='/images/arrow_top_left2.png' />
        <Typography className={classes.tomatoCntInfo}>오늘 완료 전 / 완료된 일정 개수를 보여줍니다.</Typography>
      </Box>
      <Box className={classes.tomatoBox}>
        <Typography className={classes.tomatoInfo}>
          토마토 이름을 클릭 시 이름과 일정시간이 수정 가능하고, 일정의 남은 시간을 보여줍니다.
        </Typography>
        <Avatar className={classes.arrow3} src='/images/arrow_top_right.png' />
      </Box>
      <Box className={classes.momatoBox}>
        <Box className={classes.tomatoImgBox}>
          <Avatar className={classes.tomatoImg} src='/images/tomatoChar.png' />
          <Typography className={classes.momatoTitle}>'모마토란?'</Typography>
        </Box>
        <Typography className={classes.momatoInfo}>
          뽀모도로 기법을 활용한 일정관리 사이트입니다. 사용자가 지정한 일정을 실행하고 끝나면 알람으로 알려드립니다.
        </Typography>
      </Box>
      <Box className={classes.buttonBox}>
        <Button className={classes.button} onClick={close}>
          닫기
        </Button>
      </Box>
    </Box>
  );
};

export default PageInfo;
