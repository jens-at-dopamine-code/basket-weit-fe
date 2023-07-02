import "./globals.css";

import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Basket Weit",
  description: "Website for basketball club 'Bsket Weit'",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
