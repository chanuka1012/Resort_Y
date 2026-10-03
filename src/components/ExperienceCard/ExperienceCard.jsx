import { Link } from "react-router-dom";
import SmartImage from "../SmartImage/SmartImage.jsx";

export default function ExperienceCard({ exp }) {
  return (
    <Link
      to={`/experiences#${exp.id}`}
      className="group block overflow-hidden rounded-2xl bg-white text-left shadow transition hover:-translate-y-1 hover:shadow-lg"
    >
      <SmartImage src={exp.image} alt={exp.title} className="aspect-[4/3] w-full" />
      <div className="p-5">
        <h3 className="font-display text-xl">
          <span aria-hidden="true">{exp.icon} </span>
          {exp.title}
        </h3>
        <p className="mt-1 text-sm opacity-75">{exp.tagline}</p>
        <p className="mt-3 text-sm font-semibold text-terra">Learn more →</p>
      </div>
    </Link>
  );
}