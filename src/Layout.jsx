import React from "react";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <section className="text-base h-screen md:justify-center md:items-center md:flex bg-[#424769]">
      <Outlet />
    </section>
  );
}

export default Layout;
