import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavigationBar from "@/components/v2/Navbar";
import NextProvider from "@/context/NextUIProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const sfPro = localFont({
  src: "../public/fonts/SF-Pro-Display-Medium.otf",
});

export const metadata: Metadata = {
  title: "CONSURV TECHNIC",
  description: "22/23",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sfPro.className} scroll-smooth`}>
        <NextProvider>
          <NavigationBar />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
          <Footer />
        </NextProvider>
      </body>
    </html>
  );
}
