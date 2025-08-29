"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = async (lang: "en" | "ru" | "zh") => {
    await i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="flex w-full md:w-auto gap-2 overflow-hidden">
      <button
        onClick={() => changeLanguage("en")}
        className={`flex-1 py-2 px-6 text-center transition-all duration-300 text-sm relative border border-zinc-700 rounded-lg ${currentLanguage === "en"
            ? 'text-white bg-blue-900'
            : 'text-zinc-300 hover:bg-zinc-900'
          }`}
      >
        EN
      </button>

      <button
        onClick={() => changeLanguage("ru")}
        className={`flex-1 py-2 px-6 text-center transition-all duration-300 text-sm relative border border-zinc-700 rounded-lg  ${currentLanguage === "ru"
            ? 'text-white bg-blue-900'
            : 'text-zinc-300 hover:bg-zinc-900'
          }  `}
      >
        РУС
      </button>

      <button
        onClick={() => changeLanguage("zh")}
        className={`flex-1 py-1 px-6 text-center transition-all duration-300 text-sm relative border border-zinc-700 rounded-lg ${currentLanguage === "zh"
            ? 'text-white bg-blue-900'
            : 'text-zinc-300 hover:bg-zinc-900'
          }`}
      >
        中
      </button>
    </div>
  );
}