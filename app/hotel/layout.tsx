import React, { ReactNode } from "react";
import { Footer, HeaderNavBar } from "../shared";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HeaderNavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
