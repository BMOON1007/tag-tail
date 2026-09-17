import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { CookieNotice } from "@/components/CookieNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getCurrentUser } from "@/lib/auth";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tag-Tails — A little tag. A way back home.",
  description:
    "QR pet tags from Tag-Tails LTD. A unique code links a finder to your pet’s profile and the person they love most.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const user = await getCurrentUser();

  return (
    <html lang="en-GB" className={`${dmSans.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header user={user} />
        <main>{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
