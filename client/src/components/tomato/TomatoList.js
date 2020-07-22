import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tomato from '../tomato/Tomato';
import TomatoCnt from '../tomato/TomatoCnt';
import Modals from '../common/Modal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const TomatoList = ({
  isLogin,
  isTomatoDeleteSucceed,
  tomatos,
  templateIdx = null,
  getTomatoList,
  clearTomatoList,
  getTempTomatoList,
  deleteTomato,
  deleteTempTomato,
  clearDeleteTomatoResult,
}) => {
  const date = templateIdx
    ? ''
    : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);
  const data = {
    date,
    templateIdx,
  };

  // 텃밭이 바뀌고 텃밭이 활성화일 때 토마토 목록 불러오기
  useEffect(() => {
    if (isLogin) {
      clearTomatoList();
      getTomatoList(data);
    } else {
      getTempTomatoList();
    }
  }, [isLogin, templateIdx]);

  // 토마토 삭제 시 토마토 목록 다시 불러오기
  useEffect(() => {
    if (isLogin) {
      if (isTomatoDeleteSucceed === false) {
        return;
      }
      getTomatoList(data);
      clearDeleteTomatoResult();
    }
  }, [isTomatoDeleteSucceed]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {templateIdx ? (
        <></>
      ) : (
        <>
          <TomatoCnt tomatos={tomatos}></TomatoCnt>
          {isLogin ? <Modals type='loadTemplate' /> : <></>}
        </>
      )}
      {tomatos &&
        tomatos.map(tomato => (
          <Tomato
            isLogin={isLogin}
            deleteTomato={deleteTomato}
            getTomatoList={getTomatoList}
            deleteTempTomato={deleteTempTomato}
            getTempTomatoList={getTempTomatoList}
            {...tomato}
            key={tomato.tomatoIdx}
          />
        ))}
      <Modals templateIdx={templateIdx} type='tomatoAdd'></Modals>
    </div>
  );
};

export default TomatoList;
