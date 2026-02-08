import { motion } from "framer-motion";
import carPorscheBlue from "@/assets/car-porsche-blue.jpg";
import carPorschePink from "@/assets/car-porsche-pink.jpg";
import carMazda from "@/assets/car-mazda-rx7.jpg";
import carToyota from "@/assets/car-toyota-ae86.jpg";

const cars = [
  { name: "Porsche", color: "Голубой", image: carPorscheBlue },
  { name: "Porsche", color: "Розовый", image: carPorschePink },
  { name: "Mazda RX-7", color: "Белая", image: carMazda },
  { name: "Toyota AE86", color: "Чёрно-белая", image: carToyota },
];

const CarsSection = () => {
  return (
    <section className="py-20 md:py-32" id="cars">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-4">
            ВЫБЕРИ <span className="text-primary">СВОЙ КАРТ</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            4 уникальных электрокарта с настоящим ручником
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="p-5">
                <h3 className="font-heading text-xl text-foreground">
                  {car.name}
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
