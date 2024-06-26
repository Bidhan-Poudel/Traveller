import React from "react";
import { Footer, HeaderNavBar, ScrollToTop } from "../shared";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <HeaderNavBar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
