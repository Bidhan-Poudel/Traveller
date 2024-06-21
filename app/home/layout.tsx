import React from "react";
import { Footer, HeaderNavBar, ScrollToTop } from "./components";

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
