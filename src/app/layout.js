import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get GitHub Profile",
  description: "Get GitHub Profile by username",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark:bg-gray-800">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
