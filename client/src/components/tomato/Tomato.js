import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Modals from '../common/Modal';

const useStyles = makeStyles(theme => ({
  paper: {
    maxHeight: '20px',
    display: 'flex',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    alignItems: 'center',
    [theme.breakpoints.down('650')]: {
      padding: theme.spacing(1),
    },
  },
  name: {
    flexGrow: 1,
    textAlign: 'center',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  finishIcon: {
    color: 'seagreen',
    [theme.breakpoints.up('650')]: {
      marginLeft: 11,
      marginRight: 11,
    },
  },
  leftTime: {
    fontFamily: '-Regular',
    width: 90,
    [theme.breakpoints.down('650')]: {
      fontSize: 8,
    },
  },
  playBtn: {
    [theme.breakpoints.down('650')]: {
      padding: theme.spacing(0),
      '& > *': {
        size: 'small',
        padding: theme.spacing(0),
      },
    },
  },
  trashBtn: {
    [theme.breakpoints.down('650')]: {
      padding: theme.spacing(0),
      '& > *': {
        size: 'small',
        padding: theme.spacing(0),
      },
    },
  },
}));

const Tomato = ({
  isLogin,
  templateIdx,
  tomatoName,
  tomatoLeftRegular,
  tomatoLeftBreak,
  tomatoIdx,
  tomatoFullRegular,
  tomatoFullBreak,
  tomatoCanStart,
  deleteTomato,
  deleteTempTomato,
  getTempTomatoList,
}) => {
  const classes = useStyles();

  const tomatoDeleteRequest = () => {
    //로그인이면 토마토 삭제를 서버에 요청
    if (isLogin) {
      deleteTomato(tomatoIdx);

      //아니면 리듀서에 임시토마토 삭제 요청
    } else {
      deleteTempTomato(tomatoIdx);
      getTempTomatoList();
    }
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box component={'div'}>
              {!templateIdx ? (
                tomatoCanStart ? (
                  <Link
                    className={classes.link}
                    to={{
                      pathname: `counter`,
                      state: {
                        tomatoIdx,
                        isLogin,
                        tempTomato: isLogin
                          ? null
                          : {
                              templateIdx,
                              tomatoName,
                              tomatoLeftRegular,
                              tomatoLeftBreak,
                              tomatoIdx,
                              tomatoFullRegular,
                              tomatoFullBreak,
                              tomatoCanStart,
                            },
                      },
                    }}
                  >
                    <IconButton aria-label='start' className={classes.playBtn}>
                      <PlayCircleFilledWhiteIcon />
                    </IconButton>
                  </Link>
                ) : (
                  <CheckCircleOutlineIcon className={classes.finishIcon} />
                )
              ) : (
                <></>
              )}
            </Box>
            <Typography className={classes.name} variant='h6'>
              <Modals
                type='tomatoEdit'
                templateIdx={templateIdx}
                index={tomatoIdx}
                name={tomatoName}
                fullRegular={tomatoFullRegular}
                fullBreak={tomatoFullBreak}
                tomatoCanStart={tomatoCanStart}
              />
            </Typography>
            <Typography className={classes.leftTime} variant='caption'>
              남은시간 : {Math.floor(tomatoLeftRegular / 60)}분
            </Typography>
            <Box component={'div'}>
              <IconButton aria-label='start' onClick={tomatoDeleteRequest} className={classes.trashBtn}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tomato;
