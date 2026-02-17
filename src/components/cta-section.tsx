import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-600/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Нужны ИТ-решения для бизнеса?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Оставьте заявку — наши эксперты свяжутся с вами, помогут подобрать оборудование и программное обеспечение под ваши задачи
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 pulse-button text-lg px-8 py-4"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Оставить заявку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white text-lg px-8 py-4 bg-transparent"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть каталог
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection