import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const services = [
  {
    title: "Настройка и внедрение",
    description:
      "Развернём Битрикс24 под ваши бизнес-процессы: CRM, задачи, воронки продаж, автоматизация и аналитика — всё заработает с первого дня.",
    icon: "Settings",
  },
  {
    title: "Интеграция с сервисами",
    description:
      "Подключим 1С, телефонию, почту, мессенджеры, сайт и любые внешние системы. Единое рабочее пространство без ручного переноса данных.",
    icon: "Plug",
  },
  {
    title: "Продление лицензий",
    description:
      "Оформим продление облачных и коробочных тарифов Битрикс24 на выгодных условиях. Без перерывов в работе и потери данных.",
    icon: "RefreshCw",
  },
  {
    title: "Обучение сотрудников",
    description:
      "Проведём обучение вашей команды работе в Битрикс24: от базовых функций до продвинутой автоматизации бизнес-процессов.",
    icon: "GraduationCap",
  },
  {
    title: "Доработка и кастомизация",
    description:
      "Разработаем кастомные модули, отчёты и бизнес-процессы. Адаптируем систему точно под специфику вашей компании.",
    icon: "Code",
  },
  {
    title: "Техподдержка 24/7",
    description:
      "Оперативно решаем любые вопросы по работе Битрикс24. Мониторинг, обновления и консультации — всегда на связи.",
    icon: "Headphones",
  },
]

export function BitrixSection() {
  return (
    <section id="bitrix" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-blue-950/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <Badge className="bg-orange-500/10 text-orange-400 border border-orange-500/30 mb-6">
              Официальный партнёр
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6 font-sans">
              Партнёрство с Битрикс24
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Мы — сертифицированный партнёр Битрикс24. Внедряем, настраиваем и сопровождаем CRM-систему,
              которой пользуются более 15 миллионов компаний по всему миру.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              От первичной настройки до сложных интеграций с вашей ИТ-инфраструктурой —
              берём на себя весь цикл работ, чтобы ваша команда сосредоточилась на бизнесе.
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8"
              onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            >
              Обсудить внедрение
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-orange-500/20 shadow-2xl shadow-orange-500/5">
              <img
                src="https://cdn.poehali.dev/projects/d8a8138f-15bb-4762-a271-8a0e75c9e730/files/feafcec0-db69-49ba-83ac-1f6a31c11ba8.jpg"
                alt="Партнёрство с Битрикс24"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon name={service.icon} size={24} className="text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BitrixSection