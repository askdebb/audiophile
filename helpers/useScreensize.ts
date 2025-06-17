import { useEffect, useState } from 'react';

export type ScreenSize = 'mobile' | 'tablet' | 'desktop' | '2xl';

export function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>('mobile');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1400) setScreenSize('2xl');
      else if (width >= 984) setScreenSize('desktop');
      else if (width >= 728) setScreenSize('tablet');
      else setScreenSize('mobile');
    };

    handleResize(); // run once on load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const screenSizeDetector = screenSize === '2xl' ? 'desktop' : screenSize;

  return screenSizeDetector;
}
