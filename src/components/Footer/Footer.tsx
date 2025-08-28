'use client'
import { useTranslation } from "react-i18next";
import Image from "next/image";
import LogoRU from './../../../public/images/logo-ru.svg';
import LogoEN from './../../../public/images/logo-en.svg';

export default function Footer() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const currentYear = new Date().getFullYear();

  const getLogo = () => {
    if (currentLanguage === "ru") {
      return LogoRU;
    } else {
      return LogoEN; 
    }
  };

  const logo = getLogo();

  return (
    <footer className="py-4 border-t border-zinc-700">
      <div className="conteiner-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="w-32 h-18 relative">
          <Image
            src={logo}
            alt={t("footer.logoAlt")}
            fill
            className="object-contain"
          />
        </div>
        <div className="text-zinc-500 text-sm text-center md:text-left">
          {`${t("footer.copyrightTextDate")}-${currentYear} ${t("footer.copyrightTextCompany")}`}
        </div>
      </div>
    </footer>
  )
}