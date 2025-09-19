'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/logo-simple.svg'
import SecondaryImage from '../../../public/images/logo-text-ru.svg';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [animationStage, setAnimationStage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);

    audioRef.current = new Audio('/audio/loading-sound.mp3');
    audioRef.current.preload = 'auto';

    const stage1Timer = setTimeout(() => {
      setAnimationStage(1);
    }, 500);

    const stage2Timer = setTimeout(() => {
      setAnimationStage(2);
    }, 1500);

    const stage3Timer = setTimeout(() => {
      setAnimationStage(3);
    }, 3500);

    const stage4Timer = setTimeout(() => {
      setAnimationStage(4);
    }, 4500);

    const stage5Timer = setTimeout(() => {
      setAnimationStage(5);
    }, 5000);

    const stage5bTimer = setTimeout(() => {
      setAnimationStage(5.5);
    }, 5500);

    const stage6Timer = setTimeout(() => {
      setAnimationStage(6);
    }, 8000);

    const loadingTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 8500);

    return () => {
      clearTimeout(stage1Timer);
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
      clearTimeout(stage4Timer);
      clearTimeout(stage5Timer);
      clearTimeout(stage5bTimer);
      clearTimeout(stage6Timer);
      clearTimeout(loadingTimer);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [onLoadingComplete]);

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

  if (!isMounted) {
    return null;
  }

  if (!isVisible) return null;

  let logoAnimationClass = '';
  let logoPositionClass = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
  let textAnimationClass = 'opacity-0 scale-0';
  let textPositionClass = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24';
  let bgAnimationClass = 'opacity-100';
  
  let secondaryImageClass = 'opacity-0 scale-95';
  let secondaryImagePositionClass = 'absolute top-4 left-[100px] md:left-[200px] lg:left-[260px]';

  switch (animationStage) {
    case 0:
      logoAnimationClass = 'scale-0 opacity-0';
      textAnimationClass = 'opacity-0 scale-0';
      secondaryImageClass = 'opacity-0 scale-95';
      break;
    case 1:
      logoAnimationClass = 'scale-100 opacity-100 transition-all duration-1000';
      textAnimationClass = 'opacity-0 scale-0';
      secondaryImageClass = 'opacity-0 scale-95';
      break;
    case 2:
      logoAnimationClass = 'scale-100 opacity-100 animate-pulse transition-all duration-1000';
      textAnimationClass = 'opacity-0 scale-0';
      secondaryImageClass = 'opacity-0 scale-95';
      break;
    case 3:
      logoAnimationClass = 'scale-50 opacity-100 transition-all duration-1000';
      textAnimationClass = 'opacity-0 scale-0';
      secondaryImageClass = 'opacity-0 scale-95';
      break;
    case 4:
      logoAnimationClass = 'scale-50 opacity-100 transition-all duration-500';
      logoPositionClass = 'absolute top-4 left-1/2 transform -translate-x-1/2 transition-all duration-500';
      textAnimationClass = 'opacity-0 scale-0';
      secondaryImageClass = 'opacity-0 scale-95';
      break;
    case 5:
      logoAnimationClass = 'scale-50 opacity-100 transition-all duration-500';
      logoPositionClass = 'absolute top-4 left-[24px] md:left-[100px] lg:left-[150px] transition-all duration-500';
      textAnimationClass = 'opacity-100 scale-100 transition-all duration-500';
      textPositionClass = 'absolute top-10 left-[24px] md:left-[100px] lg:left-[180px] mt-24 transition-all duration-500';
      secondaryImageClass = 'opacity-0 scale-95';
      break;
    case 5.5:
      logoAnimationClass = 'scale-50 opacity-100';
      logoPositionClass = 'absolute top-4 left-[24px] md:left-[100px] lg:left-[150px]';
      textAnimationClass = 'opacity-100 scale-100';
      textPositionClass = 'absolute top-10 left-[24px] md:left-[100px] lg:left-[180px] mt-24';
      secondaryImageClass = 'opacity-100 scale-100 transition-all duration-700 ease-out';
      break;
    case 6:
      logoAnimationClass = 'scale-50 opacity-0 transition-all duration-500';
      logoPositionClass = 'absolute top-4 left-[24px] md:left-[100px] lg:left-[150px] transition-all duration-500';
      textAnimationClass = 'opacity-0 scale-0 transition-all duration-500';
      textPositionClass = 'absolute top-10 left-[24px] md:left-[100px] lg:left-[180px] mt-24 transition-all duration-500';
      bgAnimationClass = 'opacity-0 transition-opacity duration-500';
      secondaryImageClass = 'opacity-0 scale-95 transition-all duration-500 ease-in';
      break;
  }

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-center ${bgAnimationClass}`}
      onClick={playSound}
      style={{ cursor: audioPlayed ? 'default' : 'pointer' }}
    >
      <div className={`${logoAnimationClass} ${logoPositionClass}`}>
        <Image
          src={Logo}
          alt="Логотип АТК"
          className="h-32 w-32"
        />
      </div>

      <div className={`${secondaryImagePositionClass} ${secondaryImageClass}`}>
        <Image
          src={SecondaryImage}
          alt="Дополнительное изображение"
          className="h-32"
        />
      </div>

      <div className={`text-white text-sm overflow-hidden text-left ${textAnimationClass} ${textPositionClass}`}>
        Профессиональная логистическая<br />компания АТК
      </div>

      {!audioPlayed && (
        <div className="absolute bottom-10 text-white text-center px-4">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}