import React, { useEffect } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { Outlet, useNavigate } from "react-router-dom";

function RootLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("React-Router-Project-Refocus/posts");
  }, []);
  return (
    <main className="root-layout">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default RootLayout;
