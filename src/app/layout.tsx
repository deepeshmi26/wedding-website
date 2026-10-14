import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rajshreedeepesh.co.in"),
  title: "Rajshree & Deepesh | Wedding Celebration",
  description: "A festive Indian wedding celebration website.",
  openGraph: {
    type: "website",
    url: "/en",
    siteName: "Rajshree & Deepesh",
    title: "Rajshree & Deepesh | Wedding Celebration",
    description: "Join Rajshree and Deepesh for two days of wedding celebrations in Kolkata.",
    locale: "en_IN",
    images: [
      {
        url: "/photos/whatsapp-preview-v1.jpg",
        width: 1200,
        height: 630,
        alt: "Rajshree and Deepesh smiling together on a swing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajshree & Deepesh | Wedding Celebration",
    description: "Join Rajshree and Deepesh for two days of wedding celebrations in Kolkata.",
    images: ["/photos/whatsapp-preview-v1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        {measurementId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", ${JSON.stringify(measurementId)});`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
