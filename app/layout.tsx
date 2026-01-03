import type { Metadata } from "next";
import "./globals.css";
import Header from "./header"; // adjust path if needed
import AARNChainring from "./chainring"; // adjust path if needed
import Footer from "./footer"; // optional: create a Footer component

export const metadata: Metadata = {
  title: "Nick Lin | Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-black dark:text-white antialiased">
        {/* Abstract cycling geometry animation */}
        <AARNChainring />

        {/* Header */}
        <Header />

        {/* Page content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
