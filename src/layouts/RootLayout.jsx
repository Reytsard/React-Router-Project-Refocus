import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <main className="root-layout">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootLayout;
