"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  // Сначала все стандартные React хуки
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Затем кастомные хуки (useTranslation)
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "РУС" },
    { code: "zh", label: "中文" }
  ];

  const changeLanguage = async (lang: "en" | "ru" | "zh") => {
    await i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-32 py-2 px-4 text-center transition-all duration-300 text-sm border border-zinc-700  bg-none text-white hover:bg-zinc-900"
      >
        <span>{currentLanguage.label}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-800 border border-zinc-700 shadow-lg z-10">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code as "en" | "ru" | "zh")}
              className={`w-full py-2 px-4 text-left text-sm transition-all duration-200 bg-black ${currentLanguage.code === language.code
                  ? "text-black bg-zinc-100"
                  : "text-zinc-300 hover:bg-zinc-900"
                }`}
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}