import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
<<<<<<< HEAD

import { useState } from "react";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 h-screen flex overflow-hidden">
      {/* Sidebar - Persistent on Desktop */}
      <Sidebar variant="static" />

      {/* Sidebar - Drawer on Mobile */}
      <Sidebar
        variant="drawer"
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
=======

function Layout() {
  return (
    <div className="bg-gray-50 h-screen flex overflow-hidden">
      {/* Sidebar - Persistent on Desktop */}
      <Sidebar variant="static" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-8">
>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
