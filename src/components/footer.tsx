import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="contacts" className="bg-[hsl(220,25%,4%)] border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://cdn.poehali.dev/files/817be864-ddc0-4ff3-8d0e-54570a16b0d4.png" alt="KONFIT" className="h-10 w-auto" />
              <h2 className="font-orbitron text-2xl font-bold text-white">
                KONF<span className="text-blue-500">IT</span>
              </h2>
            </div>
            <p className="font-geist text-gray-300 mb-4 text-sm leading-relaxed">
              Комплексные поставки ИТ-оборудования и программного обеспечения для бизнеса любого масштаба
            </p>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Icon name="Phone" size={16} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+74951234567" className="font-geist text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Mail" size={16} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@konfit.ru" className="font-geist text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  info@konfit.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="font-geist text-gray-300 text-sm">
                  г. Москва, ул. Примерная, д. 1, офис 100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Clock" size={16} className="text-blue-400 flex-shrink-0" />
                <span className="font-geist text-gray-300 text-sm">
                  Пн-Пт: 9:00 — 18:00
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#advantages" className="font-geist text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#products" className="font-geist text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Продукты
                </a>
              </li>
              <li>
                <a href="#warranty" className="font-geist text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#faq" className="font-geist text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Реквизиты</h3>
            <ul className="space-y-2 font-geist text-gray-400 text-sm">
              <li>ООО «КОНФИТ»</li>
              <li>ИНН: 7700000000</li>
              <li>ОГРН: 1177700000000</li>
              <li>КПП: 770001001</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-blue-500/15">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-geist text-gray-500 text-sm">© 2026 KONFIT. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-geist text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="font-geist text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200">
                Договор оферты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer