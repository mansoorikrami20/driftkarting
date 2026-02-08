import { motion } from "framer-motion";
import { Phone, Clock, Gift, AlertTriangle, Banknote, CalendarX } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 md:py-28" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-3">
            <span className="text-primary">СТОИМОСТЬ</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Честно. Понятно. Без скрытых условий.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {/* 5 min */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-card rounded-xl p-8 border-glow text-center"
          >
            <div className="text-2xl mb-2">💥</div>
            <h3 className="font-heading text-2xl text-foreground mb-2">5 МИНУТ</h3>
            <div className="text-5xl font-heading text-primary font-bold mb-2">
              1 000<span className="text-2xl">₽</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Инструктаж + экипировка включены
            </p>
            <a
              href="tel:+79917624668"
              className="inline-flex items-center gap-2 border border-primary/50 text-primary px-6 py-3 rounded-lg font-heading tracking-wider hover:bg-primary hover:text-primary-foreground transition-all w-full justify-center"
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
            <div className="text-2xl mb-2">🔥</div>
            <h3 className="font-heading text-2xl text-foreground mb-2">10 МИНУТ</h3>
            <div className="text-5xl font-heading text-primary font-bold mb-2">
              2 000<span className="text-2xl">₽</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Больше времени на дрифт!
            </p>
            <a
              href="tel:+79917624668"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading tracking-wider hover:brightness-110 transition-all w-full justify-center"
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
            <div className="text-2xl mb-2">🎁</div>
            <h3 className="font-heading text-2xl text-foreground mb-2">СЕРТИФИКАТ</h3>
            <div className="text-5xl font-heading text-primary font-bold mb-2">
              2 500<span className="text-2xl">₽</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Заезд 10 мин. Срок — 2 месяца. Самовывоз.
            </p>
            <a
              href="tel:+79917624668"
              className="inline-flex items-center gap-2 border border-primary/50 text-primary px-6 py-3 rounded-lg font-heading tracking-wider hover:bg-primary hover:text-primary-foreground transition-all w-full justify-center"
            >
              <Gift className="w-4 h-4" />
              КУПИТЬ
            </a>
          </motion.div>
        </div>

        {/* Conditions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto gradient-card rounded-xl p-6 border-glow"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-primary" />
              Бронирование заранее
            </span>
            <span className="flex items-center gap-2">
              <Banknote className="w-4 h-4 text-primary" />
              Оплата: наличными
            </span>
            <span className="flex items-center gap-2">
              <CalendarX className="w-4 h-4 text-primary" />
              Неявка — без возврата (можно перенести)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
