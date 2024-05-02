import { useRef, useEffect } from "react";

const useOnClickOutside = (callback) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!elementRef.current?.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [elementRef, callback]);

  return elementRef;
};

export default useOnClickOutside;
