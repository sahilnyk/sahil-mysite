"use client";

export function PerspectiveGrid() {
  return (
    <div className="perspective-grid">
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vanishing point at center */}
        {/* Horizontal lines converging */}
        {Array.from({ length: 20 }).map((_, i) => {
          const y = 400 + (i - 10) * 40;
          return (
            <line
              key={`h-${i}`}
              x1="0"
              y1={y < 400 ? 0 : 800}
              x2="600"
              y2="400"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.5"
            />
          );
        })}
        {Array.from({ length: 20 }).map((_, i) => {
          const y = 400 + (i - 10) * 40;
          return (
            <line
              key={`h2-${i}`}
              x1="1200"
              y1={y < 400 ? 0 : 800}
              x2="600"
              y2="400"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.5"
            />
          );
        })}
        {/* Radial lines from center */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const endX = 600 + Math.cos(angle) * 800;
          const endY = 400 + Math.sin(angle) * 600;
          return (
            <line
              key={`r-${i}`}
              x1="600"
              y1="400"
              x2={endX}
              y2={endY}
              stroke="rgba(255,255,255,0.035)"
              strokeWidth="0.5"
            />
          );
        })}
        {/* Concentric rectangles */}
        {Array.from({ length: 6 }).map((_, i) => {
          const scale = (i + 1) * 0.15;
          const w = 1200 * scale;
          const h = 800 * scale;
          const x = 600 - w / 2;
          const y = 400 - h / 2;
          return (
            <rect
              key={`rect-${i}`}
              x={x}
              y={y}
              width={w}
              height={h}
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>
    </div>
  );
}
