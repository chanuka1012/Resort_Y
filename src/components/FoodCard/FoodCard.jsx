import SmartImage from "../SmartImage/SmartImage.jsx";
import { useCart } from "../../context/CartContext.jsx";
import { formatPrice } from "../../utils/helpers.js";

export default function FoodCard({ item }) {
  const { add, qty } = useCart();
  const inCart = qty[item.id] ?? 0;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white text-left shadow">
      <div className="relative">
        <SmartImage src={item.image} alt={item.name} className="aspect-[4/3] w-full" />
        {item.tags.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1">
            {item.tags.map((t) => (
              <span key={t} className="rounded-full bg-forest px-3 py-1 text-xs text-white">{t}</span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl">{item.name}</h3>
        <p className="mt-1 flex-1 text-sm opacity-75">{item.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-semibold text-terra">{formatPrice(item.price)}</span>
          <button
            onClick={() => add(item.id)}
            className="min-h-11 rounded-full bg-forest px-5 text-sm text-white transition hover:bg-leaf focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra"
          >
            {inCart ? `Add more (${inCart})` : "Add to order"}
          </button>
        </div>
      </div>
    </article>
  );
}