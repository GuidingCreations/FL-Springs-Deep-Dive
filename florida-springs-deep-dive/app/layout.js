import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Florida Springs Deep Dive",
  description: "Website containing information about Florida springs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="app-wrapper">
          <AppHeader />
        {children}
        </main>
      </body>
    </html>
  );
}
