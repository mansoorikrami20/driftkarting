import { motion } from "framer-motion";
import { Phone, Clock, Gift } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-4">
            <span className="text-primary">СТОИМОСТЬ</span> ЗАЕЗДА
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* 5 min */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-card rounded-xl p-8 border-glow text-center"
          >
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl text-foreground mb-2">5 МИНУТ</h3>
            <div className="text-5xl font-heading text-primary font-bold mb-2">
              1000<span className="text-2xl">₽</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Инструктаж + шлем и балаклава включены
            </p>
            <a
              href="tel:+79917624668"
              className="inline-flex items-center gap-2 border border-primary/50 text-primary px-6 py-3 rounded-lg font-heading tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Phone className="w-4 h-4" />
              ЗАБРОНИРОВАТЬ
            </a>
          </motion.div>

          {/* 10 min - featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="gradient-card rounded-xl p-8 border border-primary/50 text-center relative box-glow md:scale-105"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full font-heading text-xs tracking-wider">
              ПОПУЛЯРНЫЙ
            </div>
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl text-foreground mb-2">10 МИНУТ</h3>
            <div className="text-5xl font-heading text-primary font-bold mb-2">
              2000<span className="text-2xl">₽</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Инструктаж + шлем и балаклава включены
            </p>
            <a
              href="tel:+79917624668"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading tracking-wider hover:brightness-110 transition-all"
            >
              <Phone className="w-4 h-4" />
              ЗАБРОНИРОВАТЬ
            </a>
          </motion.div>

          {/* Gift */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="gradient-card rounded-xl p-8 border-glow text-center"
          >
            <Gift className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl text-foreground mb-2">СЕРТИФИКАТ</h3>
            <div className="text-5xl font-heading text-primary font-bold mb-2">
              2500<span className="text-2xl">₽</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              10 минут заезда. Срок действия — 2 месяца. Только самовывоз.
            </p>
            <a
              href="tel:+79917624668"
              className="inline-flex items-center gap-2 border border-primary/50 text-primary px-6 py-3 rounded-lg font-heading tracking-wider hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Phone className="w-4 h-4" />
              КУПИТЬ
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
