import Icon from "@/components/ui/icon"

const categories = [
  {
    title: "Программное обеспечение",
    icon: "Monitor",
    vendors: ["Microsoft", "Kaspersky", "1С", "Positive Technologies", "InfoWatch", "Astra Linux", "РЕД ОС", "МойОфис"],
  },
  {
    title: "Серверное оборудование",
    icon: "Server",
    vendors: ["Dell", "HPE", "Lenovo", "Supermicro", "Huawei", "YADRO", "Аквариус", "Depo"],
  },
  {
    title: "Сетевое оборудование",
    icon: "Network",
    vendors: ["Cisco", "Huawei", "MikroTik", "Zyxel", "TP-Link", "Eltex", "D-Link", "Juniper"],
  },
  {
    title: "Информационная безопасность",
    icon: "Shield",
    vendors: ["Kaspersky", "Positive Technologies", "InfoWatch", "Dr.Web", "Код Безопасности", "CryptoPro", "UserGate", "ViPNet"],
  },
  {
    title: "Рабочие станции и ПК",
    icon: "Laptop",
    vendors: ["Lenovo", "HP", "Dell", "ASUS", "Acer", "Aquarius", "iRU", "MSI"],
  },
  {
    title: "Оргтехника и периферия",
    icon: "Printer",
    vendors: ["HP", "Xerox", "Canon", "Kyocera", "Brother", "Ricoh", "Pantum", "Logitech"],
  },
]

export function ApplicationsTimeline() {
  return (
    <section id="products" className="py-24 bg-[hsl(220,25%,5%)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Продукты и решения</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Поставляем оборудование и программное обеспечение ведущих мировых и российских производителей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="slide-up bg-[hsl(220,25%,8%)] border border-blue-500/15 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-600/15 flex items-center justify-center">
                  <Icon name={cat.icon} size={20} className="text-blue-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.vendors.map((vendor, vIndex) => (
                  <span
                    key={vIndex}
                    className="text-sm px-3 py-1.5 rounded-full bg-blue-600/10 text-blue-300 border border-blue-500/20 font-geist"
                  >
                    {vendor}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ApplicationsTimeline