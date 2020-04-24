import React from "react";
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import ContentWrapper from "../components/common/ContentWrapper";


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
