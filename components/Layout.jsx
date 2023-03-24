import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children, intro }) => {
  return (
    <>
      <Nav />
      {intro}
      <main className="min-h-screen container mx-auto px-4 py-8 max-w-7xl">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
