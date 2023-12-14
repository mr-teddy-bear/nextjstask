import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/providers/AuthProvider";
import Header from "@/components/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* check user auth, redirect guests from protected pages */}
      <AuthProvider>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
