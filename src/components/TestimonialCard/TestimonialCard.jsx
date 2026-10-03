export default function TestimonialCard({ quote, name }) {
  return (
    <figure className="rounded-2xl bg-white p-6 text-left shadow">
      <blockquote className="italic">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-terra">{name}</figcaption>
    </figure>
  );
}