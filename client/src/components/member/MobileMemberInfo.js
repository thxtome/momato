import React, { useEffect } from 'react';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import Modals from '../common/Modal';

const useStyles = makeStyles(theme => ({
  imgDiv: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(10, 'auto'),
    },
  },
  userGradeImg: {
    alignSelf: 'centers',
    marginBottom: theme.spacing(2),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  textDiv: {
    display: 'flex',
    '& > *': {
      display: 'block',
      margin: theme.spacing(2, 'auto'),
    },
  },
  gradeComment: {
    color: '#999',
    alignSelf: 'center',
  },
}));

const MemberInfo = ({ memberInfo, isLogin, isUpdateSucceed, history, getMemberInfo, clearEditMemberResult }) => {
  useEffect(() => {
    if (!isLogin) {
      history.push('/');
    } else if (isUpdateSucceed) {
      getMemberInfo();
      clearEditMemberResult();
      history.push('/member-info');
    }
  }, [isLogin, isUpdateSucceed]);

  const classes = useStyles();
  return (
    <>
      {isLogin ? (
        <>
          <div className={classes.imgDiv}>
            <Avatar className={classes.userGradeImg} src={memberInfo.memberGrade.gradeImageUrl} />
          </div>
          <Modals type='info' name={memberInfo.memberName} />
          <div className={classes.textDiv}>
            <Typography className={classes.gradeComment} variant='caption' display='block' gutterBottom>
              {memberInfo.memberGrade.gradeComment}
            </Typography>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default MemberInfo;
