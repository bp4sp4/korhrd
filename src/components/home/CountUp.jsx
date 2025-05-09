// CountUp 컴포넌트 정의
import React, { useState, useEffect, useRef } from "react";

export default function CountUp({ end, duration, suffix = "", shouldAnimate }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(0);
      return;
    }

    countRef.current = 0;
    startTimeRef.current = performance.now();

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = (timestamp - startTimeRef.current) / (duration * 1000);

      if (progress < 1) {
        countRef.current = Math.floor(end * Math.min(progress, 1));
        setCount(countRef.current);
        rafRef.current = requestAnimationFrame(animate);
      } else {
        countRef.current = end;
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [shouldAnimate, end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
