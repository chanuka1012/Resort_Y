import { site } from "../../data/siteData.js";

export default function HoursList() {
  return (
    <ul className="space-y-1 text-sm">
      {site.hours.map((h) => (
        <li key={h.days} className="flex justify-between gap-4">
          <span>{h.days}</span>
          <span>{h.time}</span>
        </li>
      ))}
    </ul>
  );
}