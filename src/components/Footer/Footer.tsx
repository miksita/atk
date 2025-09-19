'use client'
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 border-t border-zinc-800 bg-black">
      <div className="conteiner-custom">
        {/* Юридические ссылки */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 text-sm justify-center md:justify-start">
          <Link
            href="/privacy-policy"
            className="text-zinc-400 hover:text-white transition-colors duration-200 text-center inline-flex items-center group"
          >
            Политика конфиденциальности
            <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/data-protection"
            className="text-zinc-400 hover:text-white transition-colors duration-200 text-center inline-flex items-center group"
          >
            Защита персональных данных
            <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Копирайт */}
        <div className="mt-6 md:mt-8 pt-6 border-t border-zinc-800">
          <div className="text-zinc-500 text-xs text-center md:text-start">
            {`© 4-${currentYear} Логистическая компания АТК.`}
          </div>
        </div>
      </div>
    </footer>
  );
}