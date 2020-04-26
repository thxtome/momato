import React from "react";
import HeaderContainer from "../containers/header/HeaderContainer";
import Sidebar from "../components/sidebar/Sidebar";
import ContentWrapper from "../components/common/ContentWrapper";

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
