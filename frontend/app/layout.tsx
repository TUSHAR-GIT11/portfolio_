import "./globals.css";
import Navbar from "./component/navbar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
