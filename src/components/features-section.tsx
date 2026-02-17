import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Полный цикл поставок",
    description: "Закрываем 100% потребностей в ИТ-продуктах: от рабочих станций и оргтехники до серверного оборудования и систем безопасности.",
    icon: "Package",
    badge: "Всё в одном",
  },
  {
    title: "Официальные поставки",
    description: "Работаем напрямую с производителями и авторизованными дистрибьюторами. Гарантия подлинности каждого продукта.",
    icon: "ShieldCheck",
    badge: "Гарантия",
  },
  {
    title: "Экспертная команда",
    description: "Сертифицированные инженеры подберут оптимальное решение под ваши задачи и бюджет с учётом специфики бизнеса.",
    icon: "Users",
    badge: "Эксперты",
  },
  {
    title: "Быстрая доставка",
    description: "Складской запас ходовых позиций и отлаженная логистика позволяют обеспечить поставку в кратчайшие сроки по всей России.",
    icon: "Truck",
    badge: "Скорость",
  },
  {
    title: "Техническая поддержка",
    description: "Помогаем с внедрением, настройкой и сопровождением. Техподдержка на всех этапах — от закупки до эксплуатации.",
    icon: "Headphones",
    badge: "Поддержка",
  },
  {
    title: "Гибкие условия",
    description: "Индивидуальные коммерческие условия, работа по 44-ФЗ и 223-ФЗ, возможность отсрочки платежа для постоянных клиентов.",
    icon: "Handshake",
    badge: "B2B",
  },
]

export function FeaturesSection() {
  return (
    <section id="advantages" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают KONFIT</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Надёжный ИТ-партнёр, который закрывает все потребности вашего бизнеса в технологиях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-blue-500" />
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-blue-400 border border-blue-500/30">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection