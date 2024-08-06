import { useEffect } from "react";
import { MotionValue, useMotionValue } from "framer-motion";

type Props = {
  centerOffset?: number;
};

type MousePosition = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};

const useMousePosition = ({ centerOffset = 15 }: Props): MousePosition => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      x.set(event.clientX - centerOffset / 2);
      y.set(event.clientY - centerOffset / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [centerOffset]);

  return { x, y };
};

export default useMousePosition;
