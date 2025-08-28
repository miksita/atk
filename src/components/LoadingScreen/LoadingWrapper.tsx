'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
}