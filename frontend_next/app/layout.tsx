import "./globals.css";
import type { Metadata } from "next";
import React from "react";
// import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
// import { NavbarMenuDemo } from "@/components/ui/navbar-menu-demo";

export const metadata: Metadata = {
  title: "Ripple + Navbar",
  description: "Working setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Gochi Hand Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="min-h-screen w-full bg-black text-white">

        {/* Background - fixed behind everything */}
        <div className="fixed inset-0 z-0">
          {/* <BackgroundRippleEffect /> */}
        </div>

        {/* Navbar */}
        <div className="relative z-20 pt-6">
          {/* <NavbarMenuDemo /> */}
        </div>

        {/* Page Content */}
        <main className="relative z-20 pt-10">
          {children}
        </main>

      </body>
    </html>
  );
}
