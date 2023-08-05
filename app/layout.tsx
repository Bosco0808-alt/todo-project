import Navbar from "../components/Navbar";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import Footer from "../components/Footer";
import React from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loginStatus = Boolean(
    cookies().get("username") && cookies().get("password")
  );
  return (
    <html lang="en">
      <body>
        <Navbar loginStatus={loginStatus} />
        {children}
        <Footer />
      </body>
    </html>
  );
}