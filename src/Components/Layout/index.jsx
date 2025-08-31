import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../Header";
import { Footer } from "../Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
