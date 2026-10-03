import { useState } from "react";

export default function SmartImage({ src, alt, className = "", ...rest }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-forest/10 p-4 text-center text-sm text-forest/60 ${className}`}
      >
        Photo coming soon
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
      {...rest}
    />
  );
}