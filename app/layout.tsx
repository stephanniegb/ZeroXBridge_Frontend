"use client";
import { usePathname } from "next/navigation";
import type React from "react";

import { Geist, Geist_Mono, Manrope, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Navbar from "./components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showSidebar =
    pathname === "/dashboard" ||
    pathname === "/claim" ||
    pathname === "/claim-burn" ||
    pathname.startsWith("/dashboard/") ||
    pathname.startsWith("/claim/");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${robotoSerif.variable} antialiased bg-[#09050E]`}
      >
        <ThemeProvider>
          {showSidebar && <NavbarWithTheme />}
          <div className="relative">
            {showSidebar && <Sidebar />}
            <div
              className={`min-h-screen overflow-x-hidden ${
                showSidebar ? "lg:ml-[320px]" : ""
              }`}
            >
              <main className={`${showSidebar ? "mt-[4rem]" : ""}`}>
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

function NavbarWithTheme() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />;
}
