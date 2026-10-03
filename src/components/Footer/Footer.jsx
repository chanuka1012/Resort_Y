import { Link } from "react-router-dom";
import { site } from "../../data/siteData.js";
import { telLink, whatsappLink } from "../../utils/helpers.js";
import HoursList from "../HoursList/HoursList.jsx";

const quickLinks = [
  ["Menu", "/menu"],
  ["Experiences", "/experiences"],
  ["Gallery", "/gallery"],
  ["Reservations", "/reservations"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="bg-ink px-6 pb-28 pt-14 text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-white">{site.name}</p>
          <p className="mt-3 text-sm">{site.tagline}</p>
          {socials.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-4 text-sm">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize underline">{name}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-white">Visit us</h3>
          <p className="mb-4 text-sm">{site.address}</p>
          <HoursList />
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-white">Contact</h3>
          <ul className="space-y-1 text-sm">
            <li><a href={telLink(site.phone)} className="underline">{site.phone}</a></li>
            <li>
              <a href={whatsappLink(site.whatsapp, "Hello!")} target="_blank" rel="noopener noreferrer" className="underline">
                WhatsApp us
              </a>
            </li>
            <li><a href={`mailto:${site.email}`} className="underline">{site.email}</a></li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {quickLinks.map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-10 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}