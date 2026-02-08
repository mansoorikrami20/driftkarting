import { motion } from "framer-motion";
import { User, Ruler, Scale, ShieldCheck, AlertTriangle } from "lucide-react";

const conditions = [
  { icon: User, title: "Возраст", desc: "От 10 лет. До 16 лет — только с родителями" },
  { icon: Ruler, title: "Рост", desc: "От 150 до 190 см" },
  { icon: Scale, title: "Вес", desc: "До 120 кг" },
  { icon: ShieldCheck, title: "Экипировка", desc: "Шлем и балаклава включены в стоимость" },
  { icon: AlertTriangle, title: "Права", desc: "Не требуются. Опыт не нужен" },
];

const ConditionsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30" id="conditions">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-4">
            УСЛОВИЯ <span className="text-primary">ПРОКАТА</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {conditions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gradient-card rounded-xl p-6 border-glow text-center"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-lg text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto gradient-card rounded-xl p-6 border border-primary/20 text-center"
        >
          <p className="text-muted-foreground text-sm">
            <strong className="text-foreground">Важно:</strong> Оплата наличными. Бронь оплачивается заранее и не возвращается при неявке. Бронь можно перенести на другую дату.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConditionsSection;
