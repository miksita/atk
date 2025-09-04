'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Logo from '../../../public/images/logo-simple.svg'

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

    const loadingTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 5000);

    return () => {
      clearTimeout(stage1Timer);
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
      clearTimeout(stage4Timer);
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
  let bgAnimationClass = 'opacity-100';

  switch (animationStage) {
    case 0:
      logoAnimationClass = 'scale-0 opacity-0';
      break;
    case 1:
      logoAnimationClass = 'scale-100 opacity-100 transition-all duration-1000';
      break;
    case 2:
      logoAnimationClass = 'scale-100 opacity-100 animate-pulse';
      break;
    case 3:
      logoAnimationClass = 'scale-0 opacity-100 transition-all duration-1000';
      break;
    case 4:
      logoAnimationClass = 'scale-0 opacity-0 transition-all duration-500';
      bgAnimationClass = 'opacity-0 transition-opacity duration-500';
      break;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center ${bgAnimationClass}`}
      onClick={playSound}
      style={{ cursor: audioPlayed ? 'default' : 'pointer' }}
    >
      <div className={`transition-all ${logoAnimationClass}`}>
        <Image
          src={Logo}
          alt="Логотип АТК"
          className="h-32 w-32"
        />
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