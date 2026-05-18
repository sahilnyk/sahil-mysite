"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onEnter = () => setIsHover(true);
    const onLeave = () => setIsHover(false);

    document.addEventListener("mousemove", onMouseMove);

    const interactives = document.querySelectorAll("a, button, input, textarea, [data-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{ transform: "translate(-2px, -2px)" }}
    >
      <svg
        width={isHover ? "28" : "20"}
        height={isHover ? "28" : "20"}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-150"
      >
        <path
          d="M1 1L1 14L4.5 10.5L7 15L9 14L6.5 9.5L11 9.5L1 1Z"
          fill={isHover ? "#60a5fa" : "#3b82f6"}
          stroke="#1e3a5f"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
