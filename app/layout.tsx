import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
  const protocol = headerList.get("x-forwarded-proto") ?? "https";
  const metadataBase = new URL(host ? `${protocol}://${host}` : "https://jaisellers-companies.com");

  return {
    metadataBase,
    title: "JaiSellers Companies",
    description:
      "Strategic advisory, governance design, and executive infrastructure for mission-led organizations.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "JaiSellers Companies",
      description: "Structure where Art can thrive.",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "JaiSellers Companies: Structure where Art can thrive",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "JaiSellers Companies",
      description: "Structure where Art can thrive.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
