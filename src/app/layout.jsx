
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata = {
  title: "Tayr Digital - Digital Services, AI Solutions & Marketing Automation",
  description: "Transform your business with Tayr Digital's cutting-edge solutions. Web development, SEO, digital marketing, social media, AI automation, and more.",
  icons: [
    { rel: "icon", url: "/favicon.ico", type: "image/x-icon" },
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
       
      </head>
      <body
        className={`${inter.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
