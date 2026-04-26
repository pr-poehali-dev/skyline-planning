interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: "REV-0088",
    quote:
      "Раньше составление договора занимало 3 дня и стоило 15 000 ₽. Теперь — 30 секунд. Качество не хуже, а документ полностью соответствует законодательству.",
    author: "Алексей Воронов",
    role: "ОСНОВАТЕЛЬ, ТОРГОВАЯ КОМПАНИЯ",
  },
  {
    id: "REV-2301",
    quote:
      "Сервис спас нас от судебного разбирательства. ИИ нашёл ошибку в договоре с поставщиком, которую мы пропустили. Это уже окупило годовую подписку.",
    author: "Марина Орлова",
    role: "ДИРЕКТОР, IT-СТАРТАП",
  },
  {
    id: "REV-7725",
    quote:
      "Как юрист, я скептически относилась к AI-инструментам. Но ЮрИИст действительно знает право. Использую для рутинных задач и экономлю часы каждую неделю.",
    author: "Елена Захарова",
    role: "КОРПОРАТИВНЫЙ ЮРИСТ",
  },
  {
    id: "REV-0030",
    quote:
      "Оформляю самозанятых и ИП-шников через платформу. Каждый раз договор готов за минуту. Больше не боюсь трудовых проверок.",
    author: "Дмитрий Павлов",
    role: "HR-ДИРЕКТОР",
  },
  {
    id: "REV-2134",
    quote: "Простой интерфейс и точные результаты. Наконец-то юридический сервис, которым приятно пользоваться.",
    author: "Ольга Кузнецова",
    role: "ПРЕДПРИНИМАТЕЛЬ",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">ОТЗЫВЫ КЛИЕНТОВ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-md leading-tight">
              Бизнес, который уже защищён
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Реальные отзывы от наших пользователей.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {testimonials.slice(3, 4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}

          {/* Join CTA */}
          <div className="bg-secondary/50 border border-dashed border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center mb-3">
              <span className="text-lg">+</span>
            </div>
            <span className="text-sm font-mono text-muted-foreground">ВАШ ОТЗЫВ ЗДЕСЬ</span>
            <p className="text-sm text-muted-foreground mt-1">Присоединяйтесь к нашим клиентам.</p>
          </div>

          {testimonials.slice(4).map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground">REF</span>
                <span className="text-xs font-mono text-primary">{testimonial.id}</span>
                <div className="w-12 h-12 bg-secondary rounded-lg" />
              </div>
              <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs font-mono text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="w-4 h-4 border border-border rounded flex items-center justify-center">
                  <span className="text-[8px]">-&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
