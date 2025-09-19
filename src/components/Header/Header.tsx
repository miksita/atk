'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/images/logo-simple.svg';
import SecondaryImage from '../../../public/images/logo-text-ru.svg';
import LogoDownText from '../../../public/images/logo-text-down-ru.svg';
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";


export default function Header() {
  const { t } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const navItems = [
    { id: 1, name: "Международные перевозки", href: "/transport" },
    { id: 2, name: "Контейнерное оборудование", href: "/containers" },
    { id: 3, name: "Контакты", href: "/contact" },
    { id: 4, name: "Справочник", href: "/resourses" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Инициализация аудио
    audioRef.current = new Audio('/audio/loading-sound.mp3');
    audioRef.current.preload = 'auto';

    // Завершение анимации через 3 секунды
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => {
      clearTimeout(loadingTimer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playSound = () => {
    if (audioRef.current && !audioPlayed) {
      try {
        audioRef.current.play();
        setAudioPlayed(true);
      } catch (error) {
        console.error('Ошибка воспроизведения звука:', error);
      }
    }
  };

  return (
    <>
      {/* Фон загрузки */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black z-50 pointer-events-none"
        onClick={playSound}
        style={{ cursor: audioPlayed ? 'default' : 'pointer' }}
      >
        {!audioPlayed && (
          <div className="absolute bottom-10 text-white text-center px-4 w-full">
            <div className="animate-bounce">
              <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        )}
      </motion.div>

      {/* Основной логотип с анимацией и пульсацией */}
      <motion.div
        className="z-50"
        initial={{
          position: 'fixed' as const,
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          scale: 1.5
        }}
        animate={
          !isLoading
            ? {
              position: 'absolute' as const,
              top: 30,
              left: 30,
              x: 0,
              y: 0,
              scale: 1
            }
            : {
              position: 'fixed' as const,
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
              scale: 1.5
            }
        }
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        <motion.div
          animate={
            isLoading
              ? {
                scale: [1, 1.2, 1],
              }
              : {
                scale: 1,
              }
          }
          transition={
            isLoading
              ? {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }
              : {}
          }
        >
          <Link href="/">
            <Image
              src={Logo}
              alt="Логотип АТК"
              className="h-10 w-10 md:h-15 md:w-15"
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Вторичное изображение (текст) с синхронизированной анимацией */}
      <motion.div
        className="z-50"
        style={{
          position: isLoading ? 'fixed' : 'absolute',
          top: 20,
          left: 90,
        }}
        initial={{
          opacity: 0,
          x: 200,
          scale: 1.2
        }}
        animate={
          !isLoading
            ? {
              opacity: 1,
              x: 0,
              scale: 1,
              position: 'absolute' as const,
              top: 20,
              left: 90,
            }
            : {
              opacity: 0,
              x: 200,
              scale: 1.2,
              position: 'fixed' as const,
              top: '50%',
              left: '50%',
            }
        }
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        <Link href="/">
          <Image
            src={SecondaryImage}
            alt="Название компании"
            className="h-10 md:h-20 w-20 md:w-30"
          />
        </Link>
      </motion.div>

      {/* Текст с синхронизированной анимацией */}
      <motion.div
        className="z-50 text-white text-xs overflow-hidden text-left"
        style={{
          position: 'absolute',
          top: 90,
          left: 38,
        }}
        initial={{
          opacity: 0,
          x: 200,
        }}
        animate={
          !isLoading
            ? {
              opacity: 1,
              x: 0,
              position: 'absolute' as const,
              top: 90,
              left: 38,
            }
            : {
              opacity: 0,
              x: 200,
              position: 'fixed' as const,
              top: '50%',
              left: '50%',
            }
        }
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
      <Link href="/">
          <Image
            src={LogoDownText}
            alt="Название компании"
            className="h-10 md:h-3 w-30 md:w-42"
          />
        </Link>
      </motion.div>

      {/* Остальной код header */}
      <header className="border-b border-zinc-700 relative">
        <div className="conteiner-custom py-6 md:pt-6 md:pb-16">
          {/* Мобильная версия - верхняя строка с кнопкой языка и бургером */}
          <div className="md:hidden flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>

            <button
              className="flex flex-col space-y-1.5 w-6 h-6 justify-center items-center"
              onClick={toggleMobileMenu}
              aria-label="Открыть меню"
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Основной контент header */}
          <div className="flex items-start justify-between">
            <nav className="hidden md:flex items-end justify-end md:pr-10 flex-1">
              <ul className="flex items-center space-x-0">
                {navItems.map((item, index) => (
                  <li key={item.id} className="flex items-stretch relative">
                    <Link
                      href={item.href}
                      className="text-white hover:text-zinc-300 transition-colors duration-200 text-sm px-4 py-3 flex items-center justify-center min-h-[44px] relative group font-light"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <span className="text-center relative">
                        {item.name}
                        <span
                          className={`absolute left-0 -bottom-2 h-px bg-zinc-700 transition-all duration-300 ease-out ${hoveredItem === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'
                            }`}
                        />
                      </span>
                      {index !== navItems.length - 1 && (
                        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-6 bg-zinc-600 group-hover:bg-zinc-600 transition-colors duration-200"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden md:block flex-shrink-0">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Мобильное меню */}
          <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={toggleMobileMenu}
            ></div>

            <div className={`absolute right-0 top-0 h-full w-80 bg-black transform transition-transform duration-300 border-l border-zinc-700 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex items-center justify-end p-6">
                <button
                  onClick={toggleMobileMenu}
                  className="text-white p-2 hover:text-zinc-300"
                  aria-label="Закрыть меню"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="p-6">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="text-white hover:text-zinc-300 transition-colors duration-200 text-lg font-medium py-4 px-4 block border-b border-zinc-600 hover:bg-zinc-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="flex items-center min-h-[44px]">
                          {item.name}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}