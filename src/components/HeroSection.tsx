import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-overlay" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-foreground text-glow-strong leading-none mb-4">
            ДРИФТ
            <br />
            <span className="text-primary">КАРТИНГ</span>
          </h1>
          <p className="text-xl md:text-2xl font-heading text-foreground/90 tracking-wide mb-4">
            Легальный дрифт на электрокартах в Москве
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Почувствуй управляемый занос, как в японском дрифте — без прав, без риска, с настоящим ручником.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm text-muted-foreground mb-8"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Москва, Ореховый бульвар, 22а, −3 этаж
          </span>
          <span className="hidden sm:block text-border">|</span>
          <a href="tel:+79917624668" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 text-primary" />
            +7 (991) 762-46-68
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:+79917624668"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg tracking-wider hover:brightness-110 transition-all animate-pulse-glow"
          >
            <Phone className="w-5 h-5" />
            ЗАБРОНИРОВАТЬ ЗАЕЗД
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
            { value: "1000₽", label: "за 5 мин" },
            { value: "4", label: "JDM карта" },
            { value: "5★", label: "рейтинг" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-heading text-primary font-bold">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
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
