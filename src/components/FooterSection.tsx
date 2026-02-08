import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 border-t border-border" id="contacts">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center md:text-left">
          <div>
            <h3 className="font-heading text-xl text-foreground mb-3 flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              АДРЕС
            </h3>
            <p className="text-muted-foreground text-sm">
              Москва, Ореховый бульвар, 22а
              <br />
              −3 этаж
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-3 flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-5 h-5 text-primary" />
              ТЕЛЕФОН
            </h3>
            <a
              href="tel:+79917624668"
              className="text-primary hover:brightness-110 transition-all text-lg font-heading"
            >
              +7 (991) 762-46-68
            </a>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-3 flex items-center justify-center md:justify-start gap-2">
              <Clock className="w-5 h-5 text-primary" />
              ГРАФИК
            </h3>
            <p className="text-muted-foreground text-sm">
              Вт — Вс: 11:00 — 21:00
              <br />
              Перерыв: 15:00 — 16:00
              <br />
              Пн — выходной
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-3 flex items-center justify-center md:justify-start gap-2">
              <Instagram className="w-5 h-5 text-primary" />
              СООБЩЕСТВО
            </h3>
            <p className="text-muted-foreground text-sm">
              @driftkartingbe
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:+79917624668"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-lg font-heading text-xl tracking-wider hover:brightness-110 transition-all"
          >
            <Phone className="w-5 h-5" />
            ЗАБРОНИРОВАТЬ ЗАЕЗД
          </a>
        </div>

        <div className="mt-12 text-center border-t border-border pt-8">
          <p className="font-heading text-2xl text-foreground mb-1">
            ДРИФТ <span className="text-primary">КАРТИНГ</span>
          </p>
          <p className="text-muted-foreground text-xs">
            от музея японских авто Buckets Empire
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
