import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/v2/Navbar";
import NextProvider from "@/context/NextUIProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
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
      <body className={`${inter.className} scroll-smooth`}>
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
