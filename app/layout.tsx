import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Hồ Chí Minh 1946 | Lằn ranh đỏ lịch sử",
  description:
    "Trang nghiên cứu tương tác về tư tưởng Hồ Chí Minh, ngoại giao năm 1946 và quyết định Toàn quốc kháng chiến.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
