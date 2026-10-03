import { site } from "../../data/siteData.js";

export default function MapEmbed({ className = "" }) {
  if (!site.mapEmbedUrl) {
    return (
      <div className={`flex items-center justify-center rounded-2xl bg-forest/10 p-6 text-center text-sm ${className}`}>
        Add your Google Maps embed link (mapEmbedUrl) in siteData.js to show the map here.
      </div>
    );
  }
  return (
    <iframe
      src={site.mapEmbedUrl}
      title={`Map showing ${site.name}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full rounded-2xl border-0 shadow ${className}`}
    />
  );
}