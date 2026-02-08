import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Нужны ли права или опыт вождения?",
    a: "Нет! Права и опыт не требуются. Инструктор объяснит всё за 2–3 минуты, и вы начнёте дрифтить с первых кругов.",
  },
  {
    q: "С какого возраста можно кататься?",
    a: "С 10 лет. Дети с 10 до 16 лет катаются только в сопровождении родителей или старших родственников.",
  },
  {
    q: "Что входит в стоимость?",
    a: "Инструктаж, аренда карта, шлем и балаклава. Можете прийти со своей экипировкой.",
  },
  {
    q: "Как забронировать и оплатить?",
    a: "Бронирование заранее по телефону +7 (991) 762-46-68. Оплата только наличными на месте.",
  },
  {
    q: "Что делать, если не могу приехать?",
    a: "Позвоните заранее, и мы перенесём бронь на другую дату. При неявке без предупреждения деньги не возвращаются.",
  },
  {
    q: "Какой график работы?",
    a: "Вторник — воскресенье с 11:00 до 21:00 (перерыв 15:00–16:00). Понедельник — выходной.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-3">
            ЧАСТЫЕ <span className="text-primary">ВОПРОСЫ</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="gradient-card rounded-xl border-glow px-6 border-none"
              >
                <AccordionTrigger className="font-heading text-foreground text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
