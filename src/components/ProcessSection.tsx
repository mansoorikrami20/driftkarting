import { motion } from "framer-motion";
import { CalendarCheck, GraduationCap, Flame, Clock, Headphones } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: CalendarCheck,
    title: "Бронируешь время",
    desc: "Обязательно заранее",
  },
  {
    num: "02",
    icon: GraduationCap,
    title: "Инструктаж",
    desc: "2–3 минуты — объясняем, как входить в занос",
  },
  {
    num: "03",
    icon: Flame,
    title: "Дрифт-заезд",
    desc: "Эмоции, визг шин и контроль",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="process">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-3">
            КАК <span className="text-primary">ПРОХОДИТ ЗАЕЗД</span>
          </h2>
          <p className="text-muted-foreground text-lg">3 простых шага</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="text-6xl font-heading text-primary/20 absolute -top-4 left-1/2 -translate-x-1/2 select-none">
                {step.num}
              </div>
              <div className="relative z-10 gradient-card rounded-xl p-8 border-glow">
                <step.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 text-center"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-foreground font-heading">Заезд: 5 или 10 минут</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-5 h-5 text-primary" />
            <span className="text-foreground font-heading">Экипировка включена</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
