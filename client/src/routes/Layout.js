import React from "react"
import ContentWrapper from "../components/common/ContentWrapper"
import SidebarContainer from "../containers/sidebar/SidebarContainer"
import HeaderContainer from "../containers/header/HeaderContainer"
import MemberInfoContainer from "../containers/common/MemberInfoContainer"

const Layout = () => {
  return (
    <>
      <MemberInfoContainer />
      <HeaderContainer />
      <SidebarContainer />
      <ContentWrapper />
    </>
  )
}

export default Layout
