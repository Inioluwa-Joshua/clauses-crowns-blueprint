import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clauses & Crowns",
  description: "A prestigious law firm providing exceptional legal services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
