import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import InnerHeader from "../../components/InnerHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Google chrome clone",
  description:
    "This is this a private project for google chrome clone built on next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SearchBar />
        <InnerHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
