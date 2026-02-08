import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StickyBookButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden"
    >
      <a
        href="tel:+79917624668"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading text-base tracking-wider shadow-lg animate-pulse-glow"
      >
        <Phone className="w-5 h-5" />
        ЗАБРОНИРОВАТЬ
      </a>
    </motion.div>
  );
};

export default StickyBookButton;
