import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer"
import LoadingScreen from './../components/LoadingScreen/LoadingWrapper';
import "./globals.css";
import "../../i18n/i18n";


export const metadata: Metadata = {
  title: "АТК",
  description: "Логистическая компания АТК",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {/* <LoadingScreen> */}
          <Header />
          {children}
          <Footer/>
        {/* </LoadingScreen> */}
      </body>
    </html>
  );
}