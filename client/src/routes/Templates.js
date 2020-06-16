import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TemplateContainer from '../containers/template/TemplateContainer';
import TomatoListContainer from '../containers/tomato/TomatoListContainer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Templates = ({ isLogin, history, location }) => {
  const classes = useStyles();
  let template = location.state.template;
  // 텃밭 수정 시 push된 template로 저장
  if (!template) {
    template = location;
  }

  // 로그아웃 시 토마토화면으로 이동
  useEffect(() => {
    if (!isLogin) {
      history.push('/');
    }
  }, [isLogin, history]);

  return (
    <div className={classes.root}>
      <TemplateContainer history={history} location={location} template={template} key={template.templateIdx} />
      <TomatoListContainer templateIdx={template.templateIdx} />
    </div>
  );
};

export default Templates;
