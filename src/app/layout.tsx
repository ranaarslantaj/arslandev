import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Arslan | Frontend & WordPress Developer",
  description:
    "Frontend and WordPress developer specializing in high-performance, responsive websites, Next.js, and WooCommerce stores built for measurable growth.",
  keywords: [
    "Frontend developer portfolio",
    "WordPress developer Islamabad",
    "WooCommerce remote developer",
    "Next.js React developer",
    "Website speed optimization",
    "Figma to WordPress developer",
    "Performance monitoring web developer",
    "Responsive web design specialist",
  ],
  authors: [{ name: "Muhammad Arslan" }],
  openGraph: {
    title: "Muhammad Arslan | Frontend & WordPress Developer",
    description:
      "Frontend and WordPress developer specializing in high-performance, responsive websites, Next.js, and WooCommerce stores.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
