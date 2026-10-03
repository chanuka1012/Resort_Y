import { useMemo, useState } from "react";
import { menuItems } from "../../data/menu.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";
import Section from "../../components/Section/Section.jsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import FoodCard from "../../components/FoodCard/FoodCard.jsx";

export default function Menu() {
  usePageTitle("Menu");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => ["All", ...new Set(menuItems.map((i) => i.category))], []);

  const q = query.trim().toLowerCase();
  const items = menuItems.filter(
    (i) =>
      (category === "All" || i.category === category) &&
      `${i.name} ${i.description}`.toLowerCase().includes(q)
  );

  return (
    <Section>
      <SectionTitle
        as="h1"
        eyebrow="Our menu"
        title="Food made fresh for you"
        subtitle="Add dishes to your order, review it, then send it to us on WhatsApp."
      />

      <div className="mb-8 flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`min-h-10 rounded-full border px-5 text-sm transition ${
                category === c
                  ? "border-forest bg-forest text-white"
                  : "border-forest/30 bg-white hover:border-forest"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="w-full max-w-sm">
          <label htmlFor="menu-search" className="sr-only">Search the menu</label>
          <input
            id="menu-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dishes…"
            className="w-full rounded-full border border-forest/30 bg-white px-5 py-3"
          />
        </div>
      </div>

      {items.length === 0 ? (
        <p className="py-10 opacity-75">No dishes match your search.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => <FoodCard key={item.id} item={item} />)}
        </div>
      )}
    </Section>
  );
}