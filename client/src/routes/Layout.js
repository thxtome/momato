import React from "react";
import Header from "../components/header/Header";
import ContentWrapper from "../components/common/ContentWrapper";
import TomatoContainer from "../containers/tomato/TomatoContainer";

const Layout = () => {
  return (
    <>
      <Header />
      <TomatoContainer />
      <ContentWrapper />
    </>
  );
};

export default Layout;
