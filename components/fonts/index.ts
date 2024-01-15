import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const helvetica = localFont({
  src: "../../public/public/fonts/Helvetica/Helvetica.ttf",
  display: "swap",
  adjustFontFallback: false,
});
