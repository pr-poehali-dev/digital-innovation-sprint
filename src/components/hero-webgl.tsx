import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d8a8138f-15bb-4762-a271-8a0e75c9e730/files/041e13e7-fcf6-47e5-bde1-5ffe39ed0877.jpg"

export const Hero3DWebGL = () => {
  const titleWords = ["KONFIT"]
  const subtitle = "Комплексные ИТ-решения для вашего бизнеса"
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07))
    setSubtitleDelay(Math.random() * 0.1)
  }, [titleWords.length])

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  useEffect(() => {
    if (subtitleVisible) {
      const timeout = setTimeout(() => setButtonsVisible(true), 1000)
      return () => clearTimeout(timeout)
    }
  }, [subtitleVisible])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePos({ x: x * 20, y: y * 20 })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="h-screen bg-[hsl(220,25%,5%)] relative overflow-hidden">
      <div
        className="absolute inset-[-40px] transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.1)` }}
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,5%)]/60 via-transparent to-[hsl(220,25%,5%)]/80" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[hsl(220,25%,5%)] to-transparent" />
      </div>

      <div className="h-screen uppercase items-center w-full absolute z-[60] pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? "fade-in" : ""}
                style={{
                  animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                  opacity: index < visibleWords ? undefined : 0,
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold max-w-4xl mx-auto text-center px-4 normal-case">
          <div
            className={subtitleVisible ? "fade-in-subtitle" : ""}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            {subtitle}
          </div>
        </div>
        <div className="mt-4 md:mt-6 text-sm md:text-base text-blue-200/80 max-w-2xl text-center normal-case">
          <div
            className={subtitleVisible ? "fade-in-subtitle" : ""}
            style={{
              animationDelay: `${titleWords.length * 0.13 + 0.5 + subtitleDelay}s`,
              opacity: subtitleVisible ? undefined : 0,
            }}
          >
            Программное обеспечение · Серверное оборудование · Информационная безопасность · Сетевая инфраструктура
          </div>
        </div>
        {buttonsVisible && (
          <div className="mt-8 flex gap-4 pointer-events-auto fade-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Оставить заявку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white text-lg px-8 bg-transparent"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Каталог
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero3DWebGL