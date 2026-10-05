import { site } from "../../data/siteData.js";
import { telLink, whatsappLink } from "../../utils/helpers.js";
import HoursList from "../HoursList/HoursList.jsx";

export default function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="border-t-4 border-leaf/70 bg-gradient-to-br from-terra via-forest to-[#245f28] px-6 pb-7 pt-9 text-white/75">
      <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            {site.logo && (
              <img
                src={site.logo}
                alt=""
                className="h-11 w-11 rounded-xl bg-white p-1 object-contain shadow-sm"
              />
            )}
            <div>
              <p className="font-display text-xl text-white">{site.name}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-leaf">
                Nature · Food · Adventure
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed">{site.tagline}</p>
          {socials.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/20 px-3 py-1 text-xs capitalize transition hover:border-leaf hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Visit us</h3>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm leading-relaxed transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf"
          >
            {site.address}
            <span className="ml-1 text-leaf" aria-hidden="true">↗</span>
          </a>
          <div className="mt-3 border-t border-white/15 pt-3">
            <HoursList />
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-leaf">Get in touch</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={telLink(site.phone)} className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={whatsappLink(site.whatsapp, "Hello!")} target="_blank" rel="noopener noreferrer" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf">
                Message us on WhatsApp <span className="text-leaf" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-words transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

      </div>

      <p className="mx-auto mt-7 max-w-6xl border-t border-white/15 pt-4 text-center text-xs text-white/55">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
