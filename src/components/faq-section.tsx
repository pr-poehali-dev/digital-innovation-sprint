import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие формы оплаты вы принимаете?",
      answer:
        "Работаем по безналичному расчёту с юридическими лицами. Принимаем оплату по счёту, возможна постоплата и отсрочка для постоянных клиентов. Также работаем по 44-ФЗ и 223-ФЗ.",
    },
    {
      question: "Какие сроки поставки оборудования?",
      answer:
        "Ходовые позиции со склада — 1-3 рабочих дня. Оборудование под заказ — от 5 до 30 рабочих дней в зависимости от наличия у дистрибьютора и производителя. Точные сроки уточняйте у менеджера.",
    },
    {
      question: "Вы работаете только с крупными компаниями?",
      answer:
        "Нет, мы работаем с компаниями любого размера — от малого бизнеса до крупных корпораций и государственных учреждений. Для каждого клиента подбираем оптимальное решение под задачи и бюджет.",
    },
    {
      question: "Можете помочь с подбором оборудования?",
      answer:
        "Конечно! Наши инженеры бесплатно проконсультируют и подберут оптимальную конфигурацию оборудования и ПО под ваши задачи. Расскажите о потребностях — предложим лучшее решение.",
    },
    {
      question: "Как оформить гарантийный случай?",
      answer:
        "Свяжитесь с нашим отделом поддержки по телефону или электронной почте. Мы оперативно организуем диагностику и, при подтверждении гарантийного случая, замену или ремонт оборудования.",
    },
    {
      question: "Доставляете ли вы в регионы?",
      answer:
        "Да, осуществляем доставку по всей России. Стоимость и сроки зависят от региона и габаритов груза. Для крупных партий организуем бесплатную доставку.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-[hsl(220,25%,5%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о работе с KONFIT
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-blue-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-blue-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQSection