import { useState } from "react";
import { useCart } from "../../context/CartContext.jsx";
import { site } from "../../data/siteData.js";
import { buildOrderMessage, formatPrice, whatsappLink } from "../../utils/helpers.js";

export default function OrderBar() {
  const { lines, total, count, add, remove, clear } = useCart();
  const [open, setOpen] = useState(false);

  if (count === 0) return null;

  const href = whatsappLink(site.whatsapp, buildOrderMessage(lines, total));
  const round = "h-9 w-9 rounded-full border border-forest text-lg";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-forest/20 bg-white shadow-2xl">
      {open && (
        <div className="mx-auto max-h-[50vh] max-w-3xl overflow-y-auto px-5 pt-4">
          <ul className="divide-y divide-forest/10">
            {lines.map(({ item, count: n }) => (
              <li key={item.id} className="flex items-center justify-between gap-3 py-3">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm opacity-70">{formatPrice(item.price)} each</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => remove(item.id)} aria-label={`Remove one ${item.name}`} className={round}>−</button>
                  <span className="w-5 text-center">{n}</span>
                  <button onClick={() => add(item.id)} aria-label={`Add one ${item.name}`} className={round}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clear} className="mt-2 text-sm underline">Clear order</button>
        </div>
      )}

      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3">
        <button onClick={() => setOpen(!open)} aria-expanded={open} className="text-left">
          <span className="block text-sm opacity-70">
            {count} item{count > 1 ? "s" : ""} · {open ? "Hide" : "Review"} order
          </span>
          <span className="font-display text-xl text-forest">{formatPrice(total)}</span>
        </button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white"
        >
          Order on WhatsApp
        </a>
      </div>
    </div>
  );
}