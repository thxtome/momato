import React from "react";
import ContentWrapper from "../components/common/ContentWrapper";
import Sidebar from "../components/sidebar/Sidebar";
import HeaderContainer from "../containers/header/HeaderContainer";
import MemberInfoContainer from "../containers/common/MemberInfoContainer";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Layout = () => {
  const matches = useMediaQuery("(min-width:700px)");
  return (
    <>
      <MemberInfoContainer />
      <HeaderContainer />
      {matches ? <Sidebar /> : ""}
      <ContentWrapper />
    </>
  );
};

export default Layout;
