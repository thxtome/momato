import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1.5),
  },
  cntContainer: {
    alignItems: 'center',
  },
  innerPaper: {
    display: 'flex',
    marginBottom: 0,
    textAlign: 'start',
    boxShadow: 'none',
    border: 'none',
    fontWeight: 600,
    alignItems: 'center',
    flexWrap: 'wrap',
    fontSize: '0.9rem',
    justifyContent: 'center',
  },
  tomatoImg: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  innerCnt: {
    width: '100%',
    display: 'flex',
    marginTop: '5px',
    justifyContent: 'center',
  },
}));

const calTomatoCnt = tomatos => {
  let canStart = 0;
  let canNotStart = 0;
  if (tomatos !== null) {
    tomatos.forEach(tomato => {
      if (tomato.tomatoCanStart) {
        canStart++;
      } else {
        canNotStart++;
      }
    });
  }
  return { canStart, canNotStart };
};

const Tomato = props => {
  const classes = useStyles();
  const tomatoCnt = calTomatoCnt(props.tomatos);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={3} className={classes.cntContainer}>
              <Grid item xs={4}>
                <Paper className={classes.innerPaper}>
                  오늘의 목표
                  <div className={classes.innerCnt}>
                    <Avatar className={classes.tomatoImg} src='/images/homeMade.png' />
                    <Typography variant={'body1'}>{tomatoCnt.canStart + tomatoCnt.canNotStart}</Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.innerPaper}>
                  재배중
                  <div className={classes.innerCnt}>
                    <Avatar className={classes.tomatoImg} src='/images/homeMade.png' />
                    <Typography variant={'body1'}>{tomatoCnt.canStart}</Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.innerPaper}>
                  재배완료
                  <div className={classes.innerCnt}>
                    <Avatar className={classes.tomatoImg} src='/images/homeMade.png' />
                    <Typography variant={'body1'}>{tomatoCnt.canNotStart}</Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tomato;
