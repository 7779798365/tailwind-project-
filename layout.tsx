
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

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
  title: "Create Next App",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader />
        <MobileNav />
        <main className="grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[400px_minmax(0,1fr)] h-screen p-6 gap-3">
          {/* Sidebar */}
          <SideBar />

          {/* Main Content Area */}
          <div className="col-span-1 flex flex-col">
            {/* Fixed Header Row */}
            <Navbar />

            {/* Dynamic Content Row */}
            <div className="flex-1 p-4 bg-white rounded-3xl">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
