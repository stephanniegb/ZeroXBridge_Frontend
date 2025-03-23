import React from "react";
import Sidebar from "./components/Sidebar";
import { useTheme } from "./context/ThemeContext";

export default function LayoutContent({
  children,
  showSidebar,
}: {
  children: React.ReactNode;
  showSidebar: boolean;
}) {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex">
      {showSidebar && <Sidebar />}
      <div
        className={`min-h-screen flex w-full ${
          showSidebar ? "ml-[320px]" : ""
        }`}
      >
        <main className={`${isDarkMode ? "bg-black" : "bg-white"} flex-1`}>
          {children}
        </main>
      </div>
    </div>
  );
}
