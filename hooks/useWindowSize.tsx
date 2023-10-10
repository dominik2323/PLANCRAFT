import { useEffect, useRef, useState } from "react";

export function useWindowSize(watchHeight?: boolean) {
  const initialState = { w: 0, h: 0 };
  const [dim, setDim] = useState(initialState);
  const prevDim = useRef(initialState);

  useEffect(() => {
    const handleResize = () => {
      const newdim = watchHeight
        ? { w: window.innerWidth, h: window.innerHeight }
        : { w: window.innerWidth, h: 0 };

      if (prevDim.current.w !== newdim.w || prevDim.current.h !== newdim.h) {
        prevDim.current = newdim;
        setDim(newdim);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dim;
}
