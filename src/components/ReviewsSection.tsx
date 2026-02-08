import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Никита Евлампьев",
    date: "24 отзыва",
    text: "Были сегодня с братом. Получили массу эмоций. Очень круто, что машины в управляемости разные. Сначала думали, что 10 минут было мало, но оказалось вполне достаточно, чтобы получить незабываемые эмоции и впечатления.",
    rating: 5,
  },
  {
    name: "Александр П.",
    date: "15 января",
    text: "Отличный картинг. Такого в Москве больше не встречал. Наконец-то можно подрифтить на полноценных маленьких дрифт автомобилях. Очень понравилось, как персонал всё объясняет и показывает.",
    rating: 5,
  },
  {
    name: "Лиза Марченкова",
    date: "15 января",
    text: "Это кайф! Это совсем не как обычный картинг. Тут главное — красиво скользить боком. Инструктор показывает, как ловить машину в заносе. А когда получается — чувствуешь себя героем из «Форсажа».",
    rating: 5,
  },
  {
    name: "Дарья Косенкова",
    date: "31 января",
    text: "Прекрасное место для заряда положительными эмоциями! Очень понятный и быстрый инструктаж, у нас получилось всё с первого раза. Круто, что такой дрифт картинг появилось в Москве!",
    rating: 5,
  },
  {
    name: "gelyoss",
    date: "7 февраля",
    text: "Идеальное место для драйва. Специальные карты, которые по-настоящему позволяют войти в управляемый занос. Отличная трасса, четкий инструктаж и полная безопасность. Море эмоций, которые запомнятся надолго!",
    rating: 5,
  },
  {
    name: "Данил Ч.",
    date: "15 января",
    text: "Крутое место, однозначно буду рекомендовать всем друзьям и знакомым. Давно не получал столько эмоций. Понравится как новичкам, так и профессионалам. Приветливый персонал, всё показали и рассказали.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/20" id="reviews">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-4">
            ЧТО <span className="text-primary">ГОВОРЯТ</span> КЛИЕНТЫ
          </h2>
          <p className="text-muted-foreground text-lg">
            Реальные впечатления от посетителей дрифт-картинга
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name + review.date}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gradient-card rounded-xl p-6 border-glow hover:border-primary/60 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground text-sm leading-relaxed mb-5 flex-grow">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/30 pt-4">
                <h4 className="font-heading text-sm text-foreground">
                  {review.name}
                </h4>
                <p className="text-muted-foreground text-xs">
                  {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block gradient-card rounded-xl px-8 py-6 border-glow">
            <div className="flex items-center justify-center gap-3 mb-2">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className="w-6 h-6 fill-primary text-primary"
                />
              ))}
            </div>
            <p className="font-heading text-2xl text-foreground">5.0</p>
            <p className="text-muted-foreground text-sm">
              На основе 24+ отзывов
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
