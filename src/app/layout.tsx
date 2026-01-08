import type { Metadata } from "next";

import "./globals.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export const metadata: Metadata = {
  title: "Mark8 Production | Aap Business Sambhalo, Growth hum karwa denge",
  description: "Mark8 Production is a leading digital agency specializing in creating compelling visual stories that drive results. We combine creativity, strategy, and technology to help brands connect with their audiences and achieve their business goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-white text-black"
      >
        <Loader />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
