import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/v2/Navbar";
import NextProvider from "@/context/NextUIProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NextProvider>
          <NavigationBar />
          {children}
          <Footer />
        </NextProvider>
      </body>
    </html>
  );
}
