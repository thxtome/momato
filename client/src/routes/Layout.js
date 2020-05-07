import React from "react";
import ContentWrapper from "../components/common/ContentWrapper";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderContainer from "../containers/header/HeaderContainer";
import MemberInfoContainer from "../containers/common/MemberInfoContainer";

const Layout = () => {
  return (
    <>
      <MemberInfoContainer />
      <HeaderContainer />
      <Sidebar />
      <ContentWrapper />
    </>
  );
};

export default Layout;
