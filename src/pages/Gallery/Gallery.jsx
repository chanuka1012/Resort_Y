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
  const imageCount = galleryItems.filter((i) => i.type === "image").length;

  return (
    <Section>
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          as="h1"
          eyebrow="Gallery"
          title="A glimpse of the experience"
          subtitle="Explore the warmth, adventure, and beauty of Yakdessagala through our guest moments."
        />

        <div className="mb-8 flex flex-col items-center justify-between gap-5 rounded-4xl border border-forest/10 bg-white/80 px-5 py-4 shadow-[0_12px_35px_rgba(42,62,43,0.08)] backdrop-blur-sm md:flex-row md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {categories.map((c) => {
              const count = c === "All" ? imageCount : galleryItems.filter((item) => item.category === c && item.type === "image").length;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    filter === c
                      ? "border-forest bg-forest text-white shadow-lg shadow-forest/20"
                      : "border-forest/15 bg-forest/5 text-forest/80 hover:border-forest/40 hover:bg-white"
                  }`}
                >
                  <span>{c}</span>
                  <span
                    className={`flex h-5 min-w-5 items-center justify-center rounded-full text-[10px] ${
                      filter === c ? "bg-white/20 text-white" : "bg-white text-forest"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-full bg-forest/5 px-4 py-2 text-sm font-medium text-forest">
            {visible.length} moments
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((item) => {
            const isImage = item.type === "image";

            return isImage ? (
              <button
                key={item.src}
                onClick={() => setOpenIndex(images.findIndex((x) => x.src === item.src))}
                aria-label={`View larger: ${item.alt}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white text-left shadow-[0_18px_45px_rgba(28,42,35,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(28,42,35,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra"
              >
                <div className="relative overflow-hidden">
                  <SmartImage
                    src={item.src}
                    alt={item.alt}
                    className="aspect-4/5 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest/80 via-forest/10 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </button>
            ) : (
              <div
                key={item.src}
                className="group overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white shadow-[0_18px_45px_rgba(28,42,35,0.08)]"
              >
                <div className="relative">
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={item.poster}
                    aria-label={item.alt}
                    className="aspect-4/5 w-full bg-black object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-linear-to-t from-forest/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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