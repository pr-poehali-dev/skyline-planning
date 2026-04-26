import { Check, Lock, FileText, Zap } from "lucide-react";
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-muted-foreground tracking-wider">МОДУЛИ_СИСТЕМЫ</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 max-w-lg leading-tight">
              Почему юристы и бизнес выбирают ЮрИИст
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs hidden md:block">
            Точность профессионального юриста встречает бесконечные возможности ИИ.
          </p>
        </div>

        {/* Top row features */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Document Types */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">ФУНКЦИЯ</span>
              <span className="text-xs font-mono text-muted-foreground">ТИП_ДОКУМЕНТА</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-card rounded-full px-3 py-1 border border-border">
                  <div className="w-4 h-4 rounded-full bg-foreground" />
                  <div className="w-4 h-4 rounded-full border-2 border-border" />
                </div>
                <div className="flex-1 h-1 bg-border rounded-full">
                  <div className="w-2/3 h-full bg-foreground rounded-full" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">ДОГОВОР</span>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Любой тип документа</h3>
            <p className="text-sm text-muted-foreground">
              NDA, трудовые договоры, оферты, претензии, иски — любой документ по вашему запросу.
            </p>
          </div>

          {/* Works with all cases */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">ФУНКЦИЯ</span>
              <span className="text-xs font-mono text-muted-foreground">ОБЛАСТИ_ПРАВА</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-3 gap-2">
                {["Гражданское", "Трудовое", "Корпоративное", "Налоговое", "Договорное", "Ещё"].map((area, i) => (
                  <div
                    key={area}
                    className={`text-center p-2 rounded-lg ${i < 5 ? "bg-card border border-border" : "border border-dashed border-border"}`}
                  >
                    <div className="w-6 h-6 mx-auto mb-1 rounded bg-secondary flex items-center justify-center">
                      <FileText className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-[10px] font-mono text-accent-foreground bg-accent px-2 py-0.5 rounded">
                  + ЕЩЁ
                </span>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Все отрасли права</h3>
            <p className="text-sm text-muted-foreground">Гражданское, трудовое, корпоративное и налоговое право.</p>
          </div>

          {/* Private By Design */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <span className="text-xs font-mono text-muted-foreground">ФУНКЦИЯ</span>
              <span className="text-xs font-mono text-muted-foreground">УРОВЕНЬ_ЗАЩИТЫ</span>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-accent flex items-center justify-center">
                  <Lock className="w-6 h-6 text-foreground" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">Конфиденциальность</h3>
            <p className="text-sm text-muted-foreground">
              Шифрование корпоративного уровня. Ваши данные и документы надёжно защищены.
            </p>
          </div>
        </div>

        {/* Bottom row features */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Saves Time */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0">
                <div className="relative w-20 h-20 rounded-full border-4 border-accent flex items-center justify-center">
                  <Zap className="w-8 h-8 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">МЕТРИКА</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">В 10× быстрее юриста</h3>
                <p className="text-sm text-muted-foreground">
                  Договор за 30 секунд вместо 3 дней. ЮрИИст берёт на себя рутину, вы занимаетесь бизнесом.
                </p>
              </div>
            </div>
          </div>

          {/* Volume */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">ОБЪЁМ</span>
                </div>
                <h3 className="font-semibold text-2xl mb-1">1000+ шаблонов</h3>
                <p className="text-sm text-muted-foreground">
                  Огромная база актуальных шаблонов. Соответствие законодательству РФ гарантировано.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 flex-shrink-0">
                <div className="flex gap-1">
                  {["1", "0", "0", "0"].map((num, i) => (
                    <div
                      key={i}
                      className="w-8 h-10 bg-card border border-border rounded flex items-center justify-center"
                    >
                      <span className="font-mono text-lg">{num}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
