export const formatPrice = (n) => `LKR ${n.toLocaleString("en-US")}`;

export const telLink = (num) => `tel:${num}`;

export const whatsappLink = (num, text = "") =>
  `https://wa.me/${num.replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Builds the pre-filled order message from your document (section 6)
export function buildOrderMessage(lines, total) {
  const rows = lines
    .map(({ item, count }, i) => `${i + 1}. ${item.name} x ${count}`)
    .join("\n");
  return `Hello! I would like to order:\n\n${rows}\n\nEstimated total: ${formatPrice(total)}\nPlease confirm my order.`;
}