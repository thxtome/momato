import React, { useEffect } from "react"

const MemberInfo = (props) => {
  const { isLogin, getMemberInfo, memberInfo } = props
  //최초에 한번 로그인이 안되어있는데 jwt가 있으면 정보를 요청한다.
  useEffect(() => {
    if (!isLogin && localStorage.getItem("auth")) {
      console.log("enter")
      getMemberInfo()
    }
  }, [])

  //로그아웃하고 로그인시 정보를 요청한다
  useEffect(() => {
    if (isLogin && !memberInfo) {
      console.log("enter")
      getMemberInfo()
    }
  }, [isLogin])
  return <></>
}

export default MemberInfo
