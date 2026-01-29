import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins
const poppins = Poppins({
  variable: "--font-poppins", // This creates the CSS variable
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ziddfit",
  description: "Providing a platform to build your own.",
  icons: {
    icon: '/Gemini_Generated_Image_a9vtra9vtra9vtra-removebg-preview.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the variable to the body class */}
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}