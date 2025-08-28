"use client"
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import LogoRU from './../../../public/images/logo-ru.svg';
import LogoEN from './../../../public/images/logo-en.svg';

export default function LogoHeader({ className = "", width = 120, height = 40, animate = false }) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isAnimating, setIsAnimating] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [animate]);

  const getLogo = () => {
    if (currentLanguage === "ru") {
      return LogoRU;
    } else {
      return LogoEN;
    }
  };

  const logo = getLogo();

  return (
    <>
      <div className={`flex-shrink-0 ${isAnimating ? 'animate-logo-slide' : ''} ${className}`} ref={logoRef}>
        <Image
          src={logo}
          alt="Logo"
          width={width}
          height={height}
          className="w-auto h-24"
        />
      </div>

      <style jsx>{`
        @keyframes logoSlide {
          0% {
            opacity: 0;
            transform: translateX(200px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-logo-slide {
          animation: logoSlide 1s ease-out forwards;
        }
      `}</style>
    </>
  );
}