import { useEffect, useRef } from 'react';

function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef();

  useEffect(() => {
    console.log('useOutsideClick');

    function handleClickOutside(event) {
      console.log('handleClickOutside');
      console.log(ref);
      console.log(handler);
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener('click', handleClickOutside, { capture: listenCapture });
    return () => {
      document.removeEventListener('click', handleClickOutside, { capture: listenCapture });
    };
  }, [handler, listenCapture]);

  return ref;
}

export default useOutsideClick;
