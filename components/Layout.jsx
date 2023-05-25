import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children, intro }) => {
  return (
    <>
      <Nav />
      {intro}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
