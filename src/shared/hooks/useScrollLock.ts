import { useLayoutEffect } from 'react';

let lockCount = 0;

export const useScrollLock = (isOpen: boolean): void => {
  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    if (lockCount === 0) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${scrollbarWidth}px`
      );

      document.body.classList.add('scroll-locked');
    }

    lockCount += 1;


    return () => {

      lockCount -= 1;

      if (lockCount === 0) {
        document.body.classList.remove('scroll-locked');
        document.documentElement.style.removeProperty('--scrollbar-width');
      }
    };
  }, [isOpen]);
};