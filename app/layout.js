import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'


const monst = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Space Organics",
  description: "Premium Ayurvedic Wellness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monst.variable} ${poppins.variable} antialiased`}>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
