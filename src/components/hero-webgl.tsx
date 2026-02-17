import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"

const SLIDES = [
  {
    image: "https://cdn.poehali.dev/projects/d8a8138f-15bb-4762-a271-8a0e75c9e730/files/d2da1430-7bce-4a0a-b9b3-155dcac75a8a.jpg",
    label: "Видеокарты",
  },
  {
    image: "https://cdn.poehali.dev/projects/d8a8138f-15bb-4762-a271-8a0e75c9e730/files/5134df64-f26b-4f8b-95d3-cf64a6d3d8b2.jpg",
    label: "Процессоры",
  },
  {
    image: "https://cdn.poehali.dev/projects/d8a8138f-15bb-4762-a271-8a0e75c9e730/files/2a017e61-08fb-4cfe-bc72-8166daccb9eb.jpg",
    label: "Оперативная память",
  },
  {
    image: "https://cdn.poehali.dev/projects/d8a8138f-15bb-4762-a271-8a0e75c9e730/files/cf252343-92af-46b6-9a1f-ad108c853944.jpg",
    label: "Материнские платы",
  },
  {
    image: "https://cdn.poehali.dev/projects/d8a8138f-15bb-4762-a271-8a0e75c9e730/files/42b3eb12-47ed-4aa2-abba-387b51b6203b.jpg",
    label: "SSD-накопители",
  },
]

const INTERVAL = 4000

export const Hero3DWebGL = () => {
  const titleWords = ["KONFIT"]
  const subtitle = "Комплексные ИТ-решения для вашего бизнеса"
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [delays, setDelays] = useState<number[]>([])
  const [subtitleDelay, setSubtitleDelay] = useState(0)
  const [buttonsVisible, setButtonsVisible] = useState(false)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextSlide, setNextSlide] = useState(1)
  const [transitioning, setTransitioning] = useState(false)
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

  const goToNext = useCallback(() => {
    const next = (currentSlide + 1) % SLIDES.length
    setNextSlide(next)
    setTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(next)
      setTransitioning(false)
    }, 1000)
  }, [currentSlide])

  useEffect(() => {
    const timer = setInterval(goToNext, INTERVAL)
    return () => clearInterval(timer)
  }, [goToNext])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setMousePos({ x: x * 15, y: y * 15 })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="h-screen bg-[hsl(220,25%,5%)] relative overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-[-30px] transition-all duration-1000 ease-in-out"
          style={{
            opacity: index === currentSlide ? (transitioning ? 0 : 1) : index === nextSlide && transitioning ? 1 : 0,
            transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(${index === currentSlide && !transitioning ? 1.08 : 1.12})`,
            transition: "opacity 1s ease-in-out, transform 0.3s ease-out",
          }}
        >
          <img
            src={slide.image}
            alt={slide.label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[hsl(220,25%,5%)]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,25%,5%)] via-transparent to-[hsl(220,25%,5%)]/50" />
          <div className="absolute inset-0 bg-blue-950/20 mix-blend-overlay" />
        </div>
      ))}

      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[hsl(220,25%,5%)] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[hsl(220,25%,5%)] to-transparent" />
      </div>

      <div className="h-screen uppercase items-center w-full absolute z-[60] pointer-events-none px-10 flex justify-center flex-col">
        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron">
          <div className="flex space-x-2 lg:space-x-6 overflow-hidden text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
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
        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 overflow-hidden text-white font-bold max-w-4xl mx-auto text-center px-4 normal-case drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
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
        <div className="mt-4 md:mt-6 text-sm md:text-base text-blue-200/90 max-w-2xl text-center normal-case drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
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
          <div className="mt-6 pointer-events-none fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-blue-400/80 text-sm font-geist tracking-widest uppercase">
              {SLIDES[transitioning ? nextSlide : currentSlide].label}
            </div>
          </div>
        )}

        {buttonsVisible && (
          <div className="mt-4 flex gap-4 pointer-events-auto fade-in" style={{ animationDelay: "0.2s" }}>
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

        {buttonsVisible && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-auto fade-in" style={{ animationDelay: "0.3s" }}>
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (index !== currentSlide && !transitioning) {
                    setNextSlide(index)
                    setTransitioning(true)
                    setTimeout(() => {
                      setCurrentSlide(index)
                      setTransitioning(false)
                    }, 1000)
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === (transitioning ? nextSlide : currentSlide)
                    ? "bg-blue-500 w-6"
                    : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero3DWebGL