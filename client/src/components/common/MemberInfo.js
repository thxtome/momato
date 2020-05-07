import React, { useEffect } from "react";

const MemberInfo = (props) => {
  useEffect(() => {
    if (!props.loginReducer.isLogin && localStorage.getItem("auth")) {
      props.getMemberInfo();
    }
  }, []);
  return <></>;
};

export default MemberInfo;
