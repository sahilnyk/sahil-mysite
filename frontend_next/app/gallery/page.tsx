import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "gallery",
  description: "random moments, screenshots of things i've built, and vibes.",
};

const images = [
  { src: "https://avatars.githubusercontent.com/u/139529375?v=4", alt: "me" },
];

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-20 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-normal mb-4">gallery</h1>
        <p className="text-white/40 max-w-lg">
          random moments, screenshots, and visual proof that i sometimes touch grass.
          more coming soon.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="aspect-square border border-white/5 overflow-hidden group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
        {/* Placeholder cards */}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`placeholder-${i}`}
            className="aspect-square border border-white/5 flex items-center justify-center"
          >
            <span className="text-white/10 text-sm italic">coming soon</span>
          </div>
        ))}
      </div>
    </div>
  );
}
