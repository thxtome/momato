import React from "react";
import ContentWrapper from "../components/common/ContentWrapper";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderContainer from "../containers/header/HeaderContainer";

const Layout = () => {
  return (
    <>
      <HeaderContainer />
      <Sidebar />
      <ContentWrapper />
    </>
  );
};

export default Layout;
