import { useEffect, RefObject } from 'react';

type RefType = RefObject<HTMLElement>;
type CallbackType = (isOpen: boolean) => void;

export const useClickOutside = (ref: RefType, callback: CallbackType): void => {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const eventTarget = event.target as Element;

      if (ref.current && !ref.current.contains(eventTarget)) {
        callback(false);
      }
    };

    document.addEventListener('click', handler);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [ref, callback]);
};
