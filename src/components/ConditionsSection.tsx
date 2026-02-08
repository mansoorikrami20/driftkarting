import { motion } from "framer-motion";
import { User, Ruler, Scale, HardHat, FileText } from "lucide-react";

const conditions = [
  { icon: User, title: "Возраст", desc: "От 10 лет. 10–16 лет — только с родителями" },
  { icon: Ruler, title: "Рост", desc: "От 150 до 190 см" },
  { icon: Scale, title: "Вес", desc: "До 120 кг" },
  { icon: FileText, title: "Права и опыт", desc: "Не нужны!" },
];

const equipment = [
  { emoji: "🪖", item: "Шлем" },
  { emoji: "🧤", item: "Балаклава / перчатки" },
];

const ConditionsSection = () => {
  return (
    <section className="py-20 md:py-28" id="conditions">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Conditions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
              КОМУ <span className="text-primary">МОЖНО</span>
            </h2>
            <div className="space-y-4">
              {conditions.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 gradient-card rounded-lg p-4 border-glow"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Equipment */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
              <span className="text-primary">ЭКИПИРОВКА</span>
            </h2>
            <div className="gradient-card rounded-xl p-6 border-glow mb-6">
              <p className="text-foreground font-heading mb-4">Входит в стоимость:</p>
              <div className="space-y-3">
                {equipment.map((e) => (
                  <div key={e.item} className="flex items-center gap-3">
                    <span className="text-2xl">{e.emoji}</span>
                    <span className="text-foreground">{e.item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4 pt-4 border-t border-border/30">
                Можно прийти со своей экипировкой
              </p>
            </div>

            <div className="gradient-card rounded-xl p-6 border border-primary/30">
              <div className="flex items-start gap-3">
                <HardHat className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-foreground font-heading mb-1">Безопасность</p>
                  <p className="text-muted-foreground text-sm">
                    Каждый участник подписывает правила поведения. Возможны штрафы за повреждение карта: 1 000 – 10 000 ₽
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;
