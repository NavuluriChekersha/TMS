import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div 
        className="flex-1 overflow-auto p-4 transition-all duration-300"
        style={{ marginLeft: isSidebarOpen ? '16rem' : '5rem' }}
      >
        {children}
      </div>
    </div>
  );
}