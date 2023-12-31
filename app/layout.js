import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "./components/Navbar/Header";
import Footer from "./components/Navbar/Footer";

const inter = Inter({ subsets: ["latin"] });
const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

export const metadata = {
  title: "Av.Elif Nur Çalışan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={libre.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
