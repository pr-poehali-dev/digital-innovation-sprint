import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[hsl(220,25%,5%)]/95 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <h1 className="font-orbitron text-xl font-bold text-white tracking-wider">
              KONF<span className="text-blue-500">IT</span>
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#advantages" className="font-geist text-white hover:text-blue-400 transition-colors duration-200">
                Преимущества
              </a>
              <a href="#products" className="font-geist text-white hover:text-blue-400 transition-colors duration-200">
                Продукты
              </a>
              <a href="#warranty" className="font-geist text-white hover:text-blue-400 transition-colors duration-200">
                Гарантия
              </a>
              <a href="#faq" className="font-geist text-white hover:text-blue-400 transition-colors duration-200">
                Вопросы
              </a>
              <a href="#contacts" className="font-geist text-white hover:text-blue-400 transition-colors duration-200">
                Контакты
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-geist border-0"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Связаться с нами
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              {isOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[hsl(220,25%,5%)]/98 border-t border-blue-500/20">
              <a href="#advantages" className="block px-3 py-2 font-geist text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Преимущества
              </a>
              <a href="#products" className="block px-3 py-2 font-geist text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Продукты
              </a>
              <a href="#warranty" className="block px-3 py-2 font-geist text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Гарантия
              </a>
              <a href="#faq" className="block px-3 py-2 font-geist text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Вопросы
              </a>
              <a href="#contacts" className="block px-3 py-2 font-geist text-white hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                Контакты
              </a>
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-geist border-0"
                  onClick={() => { setIsOpen(false); document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }) }}
                >
                  Связаться с нами
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar