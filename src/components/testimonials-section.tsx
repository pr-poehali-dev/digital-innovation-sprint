import Icon from "@/components/ui/icon"

const stats = [
  { value: "500+", label: "Корпоративных клиентов", icon: "Building2" },
  { value: "10 000+", label: "Выполненных поставок", icon: "Package" },
  { value: "50+", label: "Вендоров-партнёров", icon: "Handshake" },
  { value: "15+", label: "Лет на рынке", icon: "Award" },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-[hsl(220,25%,5%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-sans">KONFIT в цифрах</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Результаты, которые говорят сами за себя
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="slide-up text-center p-6 rounded-xl bg-[hsl(220,25%,8%)] border border-blue-500/15"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-600/10 flex items-center justify-center">
                <Icon name={stat.icon} size={24} className="text-blue-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 font-orbitron">{stat.value}</div>
              <div className="text-gray-400 text-sm font-geist">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection