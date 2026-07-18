import { useEffect, useState } from 'react';

export function useIsMobile(breakpoint = '(max-width: 860px)') {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(breakpoint).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(breakpoint);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener ? mq.addEventListener('change', update) : mq.addListener(update);
    return () => {
      mq.removeEventListener ? mq.removeEventListener('change', update) : mq.removeListener(update);
    };
  }, [breakpoint]);

  return isMobile;
}
