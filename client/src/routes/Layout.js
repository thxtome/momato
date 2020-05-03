import React from "react";
import Header from "../components/header/Header";
import ContentWrapper from "../components/common/ContentWrapper";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <ContentWrapper />
    </>
  );
};

export default Layout;
