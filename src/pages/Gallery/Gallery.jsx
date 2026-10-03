import { useState } from "react";
import { galleryItems } from "../../data/gallery.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import SmartImage from "../../components/SmartImage/SmartImage.jsx";
import Lightbox from "../../components/Lightbox/Lightbox.jsx";

const categories = ["All", ...new Set(galleryItems.map((i) => i.category))];

export default function Gallery() {
  usePageTitle("Gallery");
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const visible = galleryItems.filter((i) => filter === "All" || i.category === filter);
  const images = visible.filter((i) => i.type === "image");

  return (
    <Section>
      <SectionTitle as="h1" eyebrow="Gallery" title="A look around" subtitle="Tap a photo to see it larger." />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`min-h-10 rounded-full border px-5 text-sm transition ${
              filter === c ? "border-forest bg-forest text-white" : "border-forest/30 bg-white hover:border-forest"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {visible.map((item) =>
          item.type === "image" ? (
            <button
              key={item.src}
              onClick={() => setOpenIndex(images.findIndex((x) => x.src === item.src))}
              aria-label={`View larger: ${item.alt}`}
              className="overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra"
            >
              <SmartImage src={item.src} alt={item.alt} className="aspect-square w-full transition hover:scale-105" />
            </button>
          ) : (
            <video
              key={item.src}
              controls
              playsInline
              preload="none"
              poster={item.poster}
              aria-label={item.alt}
              className="aspect-square w-full rounded-xl bg-black object-cover"
            >
              <source src={item.src} type="video/mp4" />
            </video>
          )
        )}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </Section>
  );
}