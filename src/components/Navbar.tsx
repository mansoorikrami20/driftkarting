import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Преимущества", href: "#benefits" },
  { label: "Цены", href: "#pricing" },
  { label: "Карты", href: "#cars" },
  { label: "Условия", href: "#conditions" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl text-foreground">
          ДРИФТ <span className="text-primary">КАРТИНГ</span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+79917624668"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg font-heading text-sm tracking-wider hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            ПОЗВОНИТЬ
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-heading text-foreground py-2 tracking-wider"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+79917624668"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg font-heading tracking-wider"
              >
                <Phone className="w-4 h-4" />
                ПОЗВОНИТЬ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
