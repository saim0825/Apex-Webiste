import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex",
  description: "A focused workspace for ambitious projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up" signInForceRedirectUrl="/admin" signUpForceRedirectUrl="/admin" appearance={{ variables: { colorBackground: "#ffffff", colorForeground: "#082745", colorMutedForeground: "#5c6b7a", colorInput: "#ffffff", colorInputForeground: "#082745", colorPrimary: "#f15b2a" } }}>{children}</ClerkProvider></body>
    </html>
  );
}
