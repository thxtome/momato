import React, { useState, useEffect } from 'react';
import Explain from './Explain';
import MobileExplain from './MobileExplain';
import { useMediaQuery } from '@material-ui/core';
// 로딩시 화면
const ExplainWrapper = () => {
  const matches = useMediaQuery('(min-width:800px)');
  const [explainRequired, setExplainRequired] = useState(false);
  const finishExplain = () => {
    localStorage.setItem('explainRequired', JSON.stringify(false));
    setExplainRequired(false);
  };
  useEffect(() => {
    let explainRequired = JSON.parse(localStorage.getItem('explainRequired'));
    if (explainRequired === null) {
      sessionStorage.setItem(
        'tomatos',
        JSON.stringify([
          {
            tomatoIdx: 1,
            tomatoName: '재배를 시작하자!',
            template: 0,
            tomatoCanStart: 1,
            tomatoDate: new Date(),
            tomatoEndTime: 0,
            tomatoStartTime: 0,
            tomatoFullRegular: 1500,
            tomatoLeftRegular: 1500,
            tomatoFullBreak: 300,
            tomatoLeftBreak: 300,
          },
        ]),
      );
      explainRequired = true;
    }
    setTimeout(() => {
      setExplainRequired(explainRequired);
    }, 500);
  }, []);
  return (
    <>
      {explainRequired ? (
        matches ? (
          <Explain finishExplain={finishExplain} />
        ) : (
          <MobileExplain finishExplain={finishExplain} />
        )
      ) : (
        ''
      )}
    </>
  );
};

export default ExplainWrapper;
