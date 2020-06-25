import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Modals from '../common/Modal';
import { Button } from '@material-ui/core';
import AppMenuContainer from '../../containers/header/AppMenuContainer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Load from '../common/Load';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1299,
    display: 'flex',
    borderRadius: 0,
    backgroundColor: 'white',
    height: '50px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'JSDongkang-Bold',
    fontSize: '20px',
  },
  login: {
    color: 'black',
  },
  toolbar: {
    minHeight: '100%',
  },
  logout: {
    color: 'black',
    fontFamily: 'JSDongkang-Regular',
    fontSize: '20px',
    [theme.breakpoints.down('800')]: {
      fontSize: 15,
    },
  },
}));

const Header = ({
  isLogin,
  isMemberLoading,
  isTomatoLoading,
  isTemplateLoading,
  isCalendarLoading,
  isTimerLoading,
  logout,
  getTempTomatoList,
}) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:800px)');

  const logoutRequest = () => {
    // 로그아웃시 로컬스토리지 토큰삭제 후 임시토마토 불러오기
    logout(localStorage.getItem('auth'));
    getTempTomatoList();
  };

  // 멤버정보, 토마토, 템플릿, 달력, 타이머의 로딩이 모드 끝나는지 확인 후 로딩창 지우기
  let isLoading = false;
  if (isMemberLoading || isTomatoLoading || isTemplateLoading || isCalendarLoading || isTimerLoading) {
    isLoading = true;
  } else if (!isMemberLoading && !isTomatoLoading && !isTemplateLoading && !isCalendarLoading && !isTimerLoading) {
    isLoading = false;
  }
  return (
    <>
      {isLoading ? <Load /> : <></>}
      <AppBar className={classes.root} elevation={1}>
        <Toolbar className={classes.toolbar}>
          {matches ? '' : <AppMenuContainer />}

          <Typography variant='h6' edge='start' className={classes.title}>
            MOMATO
          </Typography>
          {!isLogin ? (
            <Modals type='login' />
          ) : (
            <>
              <Button
                className={classes.logout}
                onClick={() => {
                  logoutRequest();
                }}
              >
                LOGOUT
              </Button>
            </>
          )}
          {!isLogin ? <Modals type='signup' /> : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
