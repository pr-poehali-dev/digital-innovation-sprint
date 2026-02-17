import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const warrantyItems = [
  {
    icon: "ShieldCheck",
    title: "Официальная гарантия",
    description: "Все товары поставляются с полной гарантией производителя. Мы являемся авторизованным партнёром и обеспечиваем гарантийное обслуживание в соответствии с условиями вендора.",
  },
  {
    icon: "RotateCcw",
    title: "Гарантийная замена",
    description: "В случае выявления заводского брака оперативно организуем замену оборудования. Минимизируем простои вашей инфраструктуры.",
  },
  {
    icon: "Headphones",
    title: "Техническая поддержка",
    description: "Наши инженеры готовы помочь с установкой, настройкой и решением технических вопросов. Консультации по телефону и электронной почте.",
  },
  {
    icon: "Wrench",
    title: "Сервисное обслуживание",
    description: "Предлагаем расширенные сервисные контракты на обслуживание оборудования, включая выезд специалиста и профилактические работы.",
  },
]

export function SafetySection() {
  return (
    <section id="warranty" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Гарантия и поддержка</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Обеспечиваем полную поддержку на каждом этапе — от поставки до эксплуатации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {warrantyItems.map((item, index) => (
            <Card
              key={index}
              className="glow-border slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-600/10 flex items-center justify-center">
                    <Icon name={item.icon} size={28} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SafetySection