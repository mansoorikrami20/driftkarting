import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-heading text-lg md:text-xl tracking-[0.3em] mb-4">
            МОСКВА • ОРЕХОВЫЙ БУЛЬВАР 22А
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-heading text-foreground text-glow-strong leading-none mb-6">
            ДРИФТ
            <br />
            <span className="text-primary">КАРТИНГ</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
            Управляемый занос на электрокартах с настоящим ручником.
            Почувствуй себя дрифтером — легально и безопасно.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:+79917624668"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg tracking-wider hover:brightness-110 transition-all animate-pulse-glow"
          >
            <Phone className="w-5 h-5" />
            ЗАБРОНИРОВАТЬ
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 border border-foreground/20 text-foreground px-8 py-4 rounded-lg font-heading text-lg tracking-wider hover:border-primary/50 hover:text-primary transition-all"
          >
            УЗНАТЬ ЦЕНЫ
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center gap-8 md:gap-16 text-center"
        >
          {[
            { value: "от 10", label: "лет" },
            { value: "1000₽", label: "5 минут" },
            { value: "4", label: "карта" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-heading text-primary font-bold">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
