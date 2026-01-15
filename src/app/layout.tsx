import { ThemeProvider } from "../component/Theme-provider"
import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import "sheryjs/dist/Shery.css";
 
// Poppins is not a variable font, so we must specify the weights we need
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Montserrat is a variable font, so specific weights are optional (it includes all)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Creativemk Portfolio",
  description: "jai shree mahakal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning  >
      <body
        className={`${poppins.variable}  ${montserrat.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          ></ThemeProvider>

        <Navbar  />
        {children}
        <ThemeProvider/>
      </body>
    </html>
  );
}
