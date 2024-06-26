import React, { ReactNode } from "react";
import { Footer, HeaderNavBar } from "../shared";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <HeaderNavBar />
      {children}
      <Footer />
    </>
  );
};
export default layout;
