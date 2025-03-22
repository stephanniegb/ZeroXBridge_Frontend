"use client";
import AnalyticsDashboard from "../components/analytics";
import Navbar from "../components/navbar";
import { useTheme } from "../context/ThemeContext";

export default function AnalyticsPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div
      className={`flex flex-col items-center w-full h-full relative ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      {/* to test out the connect state, please change isconnected to true */}
      <AnalyticsDashboard isDarkMode={isDarkMode} isConnected={false} />
    </div>
  );
}