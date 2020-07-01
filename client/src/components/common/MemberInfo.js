import React, { useEffect } from 'react';

const MemberInfo = ({ isLogin, getMemberInfo, memberInfo, getTemplateList, getTomatoList, getTempTomatoList }) => {
  const templateIdx = 0;
  const data = {
    date: templateIdx ? '' : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
    templateIdx,
  };

  //최초에 한번 로그인이 안되어있는데 jwt가 있으면 정보를 요청한다.
  useEffect(() => {
    if (!isLogin && localStorage.getItem('auth')) {
      getMemberInfo();
      getTemplateList();
    }
  }, []);

  //로그아웃하고 로그인시 정보를 요청한다
  useEffect(() => {
    if (isLogin && !memberInfo) {
      getMemberInfo();
      getTemplateList();
    }
  }, [isLogin]);
  return <></>;
};

export default MemberInfo;
