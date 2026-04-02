"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
    items: string[];
    // Optional explicit pixel radius. If not provided, component uses anchorRef or container size.
    radius?: number;
    // Optional ref to element to wrap around (profile image). If provided, label ring will center on that element.
    anchorRef?: React.RefObject<HTMLElement>;
    offset?: number; // px distance from anchor radius
    className?: string;
    bend?: boolean; // if true, use curved text (SVG textPath)
};

export default function CircularText({ items, radius, anchorRef, offset = 18, className, bend = true }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const uid = useRef<string>(Math.random().toString(36).slice(2, 9));
    const [layout, setLayout] = useState<{ width: number; height: number; cx: number; cy: number; r: number }>({ width: 0, height: 0, cx: 0, cy: 0, r: 0 });
    const [angleSpans, setAngleSpans] = useState<number[] | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const update = () => {
            const rect = el.getBoundingClientRect();
            let cx = rect.width / 2;
            let cy = rect.height / 2;
            let r = radius ?? Math.min(rect.width, rect.height) / 2 * 0.75;

            if (anchorRef && anchorRef.current) {
                const aRect = anchorRef.current.getBoundingClientRect();
                // compute anchor center relative to container
                cx = (aRect.left - rect.left) + aRect.width / 2;
                cy = (aRect.top - rect.top) + aRect.height / 2;
                const anchorRadius = Math.max(aRect.width, aRect.height) / 2;
                r = radius ?? anchorRadius + offset;
            }

            setLayout({ width: rect.width, height: rect.height, cx, cy, r });
            // measure text widths and convert to angular spans so words get proper arc lengths
            try {
                const circ = 2 * Math.PI * r || 1;
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    // approximate responsive font size used by the text elements
                    const approxFontPx = Math.max(12, Math.min(20, Math.round(rect.width * 0.028)));
                    ctx.font = `${approxFontPx}px sans-serif`;
                    const paddingPx = 8; // small padding around each text
                    const spans = items.map((t) => {
                        const w = ctx.measureText(t).width + paddingPx;
                        return (w / circ) * 360;
                    });
                    setAngleSpans(spans);
                } else {
                    setAngleSpans(null);
                }
            } catch (e) {
                setAngleSpans(null);
            }
        };

        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        window.addEventListener("resize", update);
        return () => { ro.disconnect(); window.removeEventListener("resize", update); };
    }, [anchorRef, radius, offset, items]);

    const n = items.length;

    return (
        <div ref={ref} className={`absolute inset-0 pointer-events-none ${className ?? ""}`} style={{ overflow: "visible" }}>
            <svg
                width={layout.width}
                height={layout.height}
                className="absolute inset-0 w-full h-full pointer-events-none"
                overflow="visible"
                style={{ overflow: "visible" }}
            >
                <defs>
                    {items.map((_, i) => {
                        const mid = (i / n) * 360; // degrees — evenly spaced centers
                        const span = angleSpans ? angleSpans[i] : Math.min(360 / n * 0.9, 60);
                        const start = mid - span / 2;
                        const end = mid + span / 2;
                        const startRad = (start - 90) * (Math.PI / 180);
                        const endRad = (end - 90) * (Math.PI / 180);
                        const x1 = layout.cx + layout.r * Math.cos(startRad);
                        const y1 = layout.cy + layout.r * Math.sin(startRad);
                        const x2 = layout.cx + layout.r * Math.cos(endRad);
                        const y2 = layout.cy + layout.r * Math.sin(endRad);
                        const largeArcFlag = span > 180 ? 1 : 0;
                        const id = `circular-text-path-${uid.current}-${i}`;
                        const d = `M ${x1} ${y1} A ${layout.r} ${layout.r} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
                        return <path key={id} id={id} d={d} fill="none" stroke="transparent" />;
                    })}
                </defs>

                {items.map((text, i) => {
                    const id = `circular-text-path-${uid.current}-${i}`;
                    return (
                        <text key={`text-${i}`} fill="white" className="text-sm sm:text-base md:text-lg" style={{ fontFamily: "'Gochi Hand', cursive" }}>
                            <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
                                {text}
                            </textPath>
                        </text>
                    );
                })}
            </svg>
        </div>
    );
}
