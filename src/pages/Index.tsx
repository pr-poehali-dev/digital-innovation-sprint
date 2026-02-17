import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { FeaturesSection } from "@/components/features-section"
import { ApplicationsTimeline } from "@/components/applications-timeline"
import { SafetySection } from "@/components/safety-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BitrixSection } from "@/components/bitrix-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero3D />
        <FeaturesSection />
        <ApplicationsTimeline />
        <TestimonialsSection />
        <BitrixSection />
        <section id="safety">
          <SafetySection />
        </section>
        <section id="faq-wrapper">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}