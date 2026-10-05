import { Link } from "react-router-dom";

const variants = {
  solid: "bg-forest text-white hover:bg-terra",
  outline: "border border-forest text-forest hover:bg-forest hover:text-white",
  light: "border border-white text-white hover:bg-white hover:text-forest",
  whatsapp: "bg-[#25D366] text-white hover:opacity-90",
};

const sizes = {
  md: "min-h-11 px-7 py-3",
  sm: "min-h-10 px-5 py-2 text-sm",
};

// Use  to="/menu"  for pages,  href="..."  for external links, neither for a <button>
export default function Button({ to, href, variant = "solid", size = "md", className = "", children, ...props }) {
  const cls = `inline-flex items-center justify-center rounded-full font-semibold transition
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra
    ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
