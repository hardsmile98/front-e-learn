import { useEffect, useState } from 'react';
import { POINTS } from 'mytheme/theme';
import { debounce } from 'utils';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < POINTS.md);

  const hasWindow = typeof window !== 'undefined';

  const handleResize = () => {
    const isMobileWidth = window.innerWidth < POINTS.md;
    setIsMobile(isMobileWidth);
  };

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', debounce(handleResize, 100));
    }

    return () => {
      if (hasWindow) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [hasWindow]);

  return isMobile;
}

export default useIsMobile;
