import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    paddingLeft: '40px',
  },
  paper: {
    boxShadow: 'none',
  },
  msgMobile: {
    display: 'none',
  },
  yearMoblie: {
    fontSize: '1.5rem',
  },
  monthMoblie: {
    fontSize: '2rem',
    marginLeft: theme.spacing(2),
  },
}));

const YearAndMonth = ({ year, month, prevMonth, nextMonth, tomatoOfDates }) => {
  const matches = useMediaQuery('(min-width:700px)');
  const classes = useStyles();
  let cnt = 0;

  tomatoOfDates.forEach(element => {
    cnt += parseInt(element.tomatoCnt);
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Box className={classes.root} component={'div'}>
          <IconButton
            onClick={() => {
              prevMonth();
            }}
            aria-label='left'
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          <Box component={'div'}>
            <Typography variant={'h4'} className={matches ? '' : classes.yearMoblie}>
              {year}
            </Typography>
          </Box>
          <Box component={'div'}>
            <Typography variant={'h2'} className={matches ? '' : classes.monthMoblie}>
              {month}
            </Typography>
          </Box>
          <IconButton
            onClick={() => {
              nextMonth();
            }}
            aria-label='right'
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
        <Box component={'div'}></Box>
        <Box component={'div'}></Box>
      </Grid>

      <Grid item xs={6}>
        <Box className={classes.root} component={'div'}>
          <Typography variant={'h4'} className={matches ? '' : classes.msgMobile}>
            이달의 토마토
          </Typography>
          <Avatar className={classes.tomatoImg} src='/images/homeMade.png' />
          <Typography variant={'h4'}>{cnt}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default YearAndMonth;
