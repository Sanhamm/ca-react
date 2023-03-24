import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
