import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Swiftee Autos & Logistics - Your Trusted Partner",
  description: "Buy cars and move packages with speed and reliability.",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-brand-orange/30`}
      >
        <div className="noise-overlay" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
