import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/common/NavBar";

import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe App",
  description: "The best Recipe App",
  openGraph: {
    images: [
        {
            url: "https://assignment-8-khana-khazana.vercel.app/api/og",
            width: 1200,
            height: 600,
        },
    ],
},
};

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
