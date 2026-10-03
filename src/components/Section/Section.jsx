import { motion, useReducedMotion } from "framer-motion";

const tones = {
  cream: "bg-cream",
  white: "bg-white",
  forest: "bg-forest text-white",
};

export default function Section({ id, tone = "cream", children }) {
  const reduce = useReducedMotion();
  return (
    <section id={id} className={`scroll-mt-20 ${tones[tone]}`}>
      <motion.div
        className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </section>
  );
}