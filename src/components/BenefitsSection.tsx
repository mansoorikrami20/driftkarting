import { motion } from "framer-motion";
import { Zap, Target, Settings, ShieldCheck, Car } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Электрокарты с ручником",
    desc: "Контроль срыва, а не просто газ",
  },
  {
    icon: Target,
    title: "Одиночные карты",
    desc: "Всё внимание на тебя",
  },
  {
    icon: Settings,
    title: "Управляемый занос",
    desc: "Учишься дрифтить за 5 минут",
  },
  {
    icon: ShieldCheck,
    title: "Безопасно и легально",
    desc: "Подходит даже новичкам",
  },
  {
    icon: Car,
    title: "Авто в стиле JDM",
    desc: "AE86, RX-7, Porsche",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28" id="benefits">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-3">
            ПОЧЕМУ ЭТО <span className="text-primary">ВЗРЫВАЕТ ЭМОЦИИ</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Не картинг. Не симулятор. <strong className="text-foreground">Настоящий дрифт.</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gradient-card rounded-xl p-6 border-glow text-center hover:border-primary/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-base text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="tel:+79917624668"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading text-lg tracking-wider hover:brightness-110 transition-all"
          >
            ХОЧУ ПОПРОБОВАТЬ
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
