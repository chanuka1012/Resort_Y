import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site } from "../../data/siteData.js";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton.jsx";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Menu", "/menu"],
  ["Experiences", "/experiences"],
  ["Reservations", "/reservations"],
  ["Contact", "/contact"],
];

const linkClass = ({ isActive }) =>
  isActive ? "font-semibold text-terra" : "hover:text-terra";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 bg-cream/95 shadow-sm backdrop-blur" aria-label="Main">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl text-forest">
          {site.logo && <img src={site.logo} alt="" className="h-9 w-9 object-contain" />}
          <span>{site.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-6 text-sm lg:flex">
          {links.map(([label, to]) => (
            <li key={to}>
              <NavLink to={to} end={to === "/"} className={linkClass}>{label}</NavLink>
            </li>
          ))}
          <li>
            <WhatsAppButton size="sm" label="Order Now" text="Hello! I would like to place an order." />
          </li>
        </ul>

        <button
          className="flex h-11 w-11 items-center justify-center text-2xl lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream px-6 pb-5 lg:hidden">
          <ul>
            {links.map(([label, to]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setOpen(false)}
                  className={(s) => `block py-3 ${linkClass(s)}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <WhatsAppButton className="mt-3 w-full" label="Order Now" text="Hello! I would like to place an order." />
        </div>
      )}
    </nav>
  );
}