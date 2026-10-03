export default function VideoPlayer({ video, className = "" }) {
  if (!video) return null;

  return (
    <video
      controls
      playsInline
      preload="none"
      poster={video.poster}
      className={`w-full rounded-2xl bg-black shadow-lg ${className}`}
    >
      <source src={video.src} type="video/mp4" />
      Your browser does not support video playback.
    </video>
  );
}