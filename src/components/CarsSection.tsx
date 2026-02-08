import { motion } from "framer-motion";
import carPorscheBlue from "@/assets/car-porsche-blue.jpg";
import carPorschePink from "@/assets/car-porsche-pink.jpg";
import carMazda from "@/assets/car-mazda-rx7.jpg";
import carToyota from "@/assets/car-toyota-ae86.jpg";

const cars = [
  { name: "Porsche", color: "Голубой", emoji: "🔵", image: carPorscheBlue },
  { name: "Porsche", color: "Розовый", emoji: "💗", image: carPorschePink },
  { name: "Mazda RX-7", color: "Белая", emoji: "⚪", image: carMazda },
  { name: "Toyota AE86", color: "Чёрно-белая", emoji: "⚫⚪", image: carToyota },
];

const CarsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="cars">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-3">
            ПАРК <span className="text-primary">ДРИФТ-КАРТОВ</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Выбирай свой стиль. Каждый карт — с ручником и настроен под дрифт.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {cars.map((car, i) => (
            <motion.div
              key={car.color + car.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group gradient-card rounded-xl overflow-hidden border-glow hover:border-primary/60 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.color} ${car.name}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-heading text-lg text-foreground flex items-center gap-2">
                  <span>{car.emoji}</span> {car.name}
                </h3>
                <p className="text-primary text-sm font-medium">{car.color}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
