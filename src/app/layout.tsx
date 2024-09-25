import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

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
  title: "Book Reader",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-start justify-between`}
      >
        <Sidebar />
        <main className="grid w-full h-full pl-[300px]">
          <Header />
          <div className="p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
