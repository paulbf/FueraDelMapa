import { HeroSection } from "@/components/hero-section"
import { DestinationsSection } from "@/components/destinations-section"
import { ComparatorSection } from "@/components/comparator-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterFooter } from "@/components/newsletter-footer"

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--bg-primary)" }}>
      <HeroSection />
      <DestinationsSection />
      <ComparatorSection />
      <ServicesSection />
      <TestimonialsSection />
      <NewsletterFooter />
    </main>
  )
}
