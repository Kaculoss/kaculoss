import "../styles/globals.css";
import "react-vertical-timeline-component/style.min.css";
import type { Metadata } from "next";
import { Poppins, Gugi } from "next/font/google";
import { Toaster } from "@/components";
import GoogleAnalytics from "@/GoogleAnalytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
  display: "swap",
});

const gugi = Gugi({
  weight: "400",
  subsets: ["latin"],
  variable: "--gugi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaculoss",
  description: "Your No. 1 3D Web Developer in Accra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.className} ${gugi.variable} ${gugi.className}`}
    >
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS &&
        process.env.NEXT_PUBLIC_GOOGLE_KEY ? (
          <GoogleAnalytics
            ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
            ga_key={process.env.NEXT_PUBLIC_GOOGLE_KEY}
          />
        ) : null}
        <Toaster />
        {children}
      </body>
    </html>
  );
}
