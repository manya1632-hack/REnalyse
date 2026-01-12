import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import { Poppins } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Initialize Poppins font based on image_2.png specs
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Regular, Medium, SemiBold, Bold
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "REnalyse | AI-Powered Renal Health Screening",
  description: "Clinical-grade, sub-millisecond renal health analysis using advanced AI and FHIR interoperability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased font-sans bg-[#F8F9FC]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
