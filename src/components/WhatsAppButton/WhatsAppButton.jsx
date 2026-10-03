import Button from "../Button/Button.jsx";
import { site } from "../../data/siteData.js";
import { whatsappLink } from "../../utils/helpers.js";

export default function WhatsAppButton({ text = "Hello!", label = "Chat on WhatsApp", variant = "whatsapp", ...props }) {
  return (
    <Button
      href={whatsappLink(site.whatsapp, text)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      {...props}
    >
      {label}
    </Button>
  );
}