import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/context/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Henok",
  description:
    "Henok is an incredible Frontend developer, passionate about solving complex problems and building innovative products that benefit humanity.",
    icons:{
      icon:['/henok.png?v=4'],
      apple:['/henok.png?v=4'],
      shortcut:['/henok.png?v=4']
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-light_bg dark:bg-black text-gray-900 dark:text-white  antialiased`}
      >
        <Providers>
        <Navbar />
        {children}
        <Footer/>
        </Providers>
      </body>
    </html>
  );
}
