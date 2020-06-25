import React from 'react';
import { Avatar, makeStyles, Typography, Toolbar } from '@material-ui/core';
import Modals from '../common/Modal';

const useStyles = makeStyles(theme => ({
  userGrade: {
    alignSelf: 'center',
    marginBottom: theme.spacing(2),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  gradeComment: {
    color: '#999',
    alignSelf: 'center',
    fontFamily: 'JSDongkang-Regular',
  },
}));

const Member = ({ memberInfo, isLogin }) => {
  memberInfo = memberInfo
    ? memberInfo
    : {
        memberName: '비회원',
        memberGrade: { gradeComment: '토마토 재배에 꿈을 품은 농사꾼 지망생' },
      };

  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <Toolbar />
      <Avatar className={classes.userGrade} src={memberInfo.memberGrade.gradeImageUrl} />
      {isLogin ? (
        <Modals type='info' name={memberInfo.memberName} />
      ) : (
        <Modals type='login' name={memberInfo.memberName} />
      )}
      <Typography className={classes.gradeComment} variant='caption' display='block' gutterBottom>
        {memberInfo.memberGrade.gradeComment}
      </Typography>
    </>
  );
};

export default Member;
