import React from "react";
import { Footer, HeaderNavBar } from "./components";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <HeaderNavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
