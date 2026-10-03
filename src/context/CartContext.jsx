import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { menuItems } from "../data/menu.js";

const CartContext = createContext(null);
const STORAGE_KEY = "restaurant-cart-v1";

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

export function CartProvider({ children }) {
  const [qty, setQty] = useState(load); // { [menuItemId]: quantity }

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(qty));
    } catch {
      /* storage unavailable: ignore */
    }
  }, [qty]);

  const add = useCallback((id) => setQty((q) => ({ ...q, [id]: (q[id] ?? 0) + 1 })), []);

  const remove = useCallback(
    (id) =>
      setQty((q) => {
        const next = { ...q };
        if ((next[id] ?? 0) <= 1) delete next[id];
        else next[id] -= 1;
        return next;
      }),
    []
  );

  const clear = useCallback(() => setQty({}), []);

  const value = useMemo(() => {
    const lines = Object.entries(qty)
      .map(([id, count]) => ({ item: menuItems.find((m) => m.id === Number(id)), count }))
      .filter((l) => l.item);
    const total = lines.reduce((sum, l) => sum + l.item.price * l.count, 0);
    const count = lines.reduce((sum, l) => sum + l.count, 0);
    return { qty, lines, total, count, add, remove, clear };
  }, [qty, add, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);