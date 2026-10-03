import { useCart } from "../../context/CartContext.jsx";
import { site } from "../../data/siteData.js";
import { telLink, whatsappLink } from "../../utils/helpers.js";

export default function WhatsAppFloat() {
  const { count } = useCart();
  if (count > 0) return null; // the order bar takes this space

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={telLink(site.phone)}
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-xl text-white shadow-lg md:hidden"
      >
        📞
      </a>
      <a
        href={whatsappLink(site.whatsapp, "Hello! I have a question.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg"
      >
        💬
      </a>
    </div>
  );
}