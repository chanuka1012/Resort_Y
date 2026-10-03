import { useEffect } from "react";

export default function Lightbox({ images, index, onClose, onChange }) {
  const total = images.length;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % total);
      if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const img = images[index];
  if (!img) return null;

  const arrow = "absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-4xl text-white";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 h-11 w-11 text-3xl text-white">✕</button>

      <button
        onClick={(e) => { e.stopPropagation(); onChange((index - 1 + total) % total); }}
        aria-label="Previous photo"
        className={`${arrow} left-2`}
      >‹</button>

      <img
        src={img.src}
        alt={img.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] max-w-full rounded-lg object-contain"
      />

      <button
        onClick={(e) => { e.stopPropagation(); onChange((index + 1) % total); }}
        aria-label="Next photo"
        className={`${arrow} right-2`}
      >›</button>

      <p className="absolute bottom-5 px-6 text-center text-sm text-white/80">{img.alt}</p>
    </div>
  );
}