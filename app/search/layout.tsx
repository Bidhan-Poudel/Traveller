import React, { ReactNode } from "react";
import { Footer, HeaderNavBar } from "../home/components";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderNavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
