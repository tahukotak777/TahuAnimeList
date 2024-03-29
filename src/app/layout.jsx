import { Inter } from 'next/font/google'
import "./globals.css";
import NavBar from "@/components/NavBar";
import NavBarBottom from "@/components/NavBarBottom";
import { SpeedInsights } from "@vercel/speed-insights/next";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "TahuAnimeList",
  description: "nonton anim sub indo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-main-dark`}>
        <NavBar />
        <div className="mb-14">{children}</div>
        <NavBarBottom />
        <SpeedInsights />
      </body>
    </html>
  );
}
