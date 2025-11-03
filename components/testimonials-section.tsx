"use client"

import Image from "next/image"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "Mahahual fue exactamente lo que necesitábamos: playa paradisíaca sin el caos de Cancún. Fuera del Mapa nos llevó a lugares que jamás hubiéramos encontrado solos.",
    name: "Martina López",
    location: "Buenos Aires",
    avatar: "/smiling-woman-portrait.png",
  },
  {
    quote:
      "Tarragona nos sorprendió completamente. Historia romana increíble, comida espectacular y cero turistas. Fue como tener la ciudad para nosotros.",
    name: "Diego Fernández",
    location: "Montevideo",
    avatar: "/smiling-man-portrait.png",
  },
  {
    quote:
      "Estrasburgo es mágico. La arquitectura, los canales, la mezcla de culturas... Todo lo que amamos de Europa sin las multitudes de París. Perfecto.",
    name: "Carolina Ruiz",
    location: "Santiago",
    avatar: "/happy-woman-portrait.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "rgba(252, 222, 178, 0.15)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance"
            style={{ color: "var(--text-primary)" }}
          >
            Lo que dicen nuestros viajeros
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Historias reales de viajeros que eligieron explorar fuera del mapa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative group transition-all duration-300 cursor-pointer"
      style={{
        borderRadius: "var(--card-radius)",
        boxShadow: isHovered ? "var(--shadow-elevated)" : "var(--shadow-soft)",
        backgroundColor: "var(--bg-primary)",
        border: "1px solid rgba(186, 192, 202, 0.3)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icono de comillas decorativo */}
      <div className="absolute top-6 right-6 opacity-10">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--accent-primary)" }}>
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="p-8 relative">
        {/* Estrellas de calificación */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: "var(--accent-warm)" }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Testimonio */}
        <p
          className="leading-relaxed mb-6 text-[15px] relative z-10"
          style={{ color: "var(--text-secondary)" }}
        >
          "{testimonial.quote}"
        </p>

        {/* Información del usuario */}
        <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: "rgba(186, 192, 202, 0.2)" }}>
          <div 
            className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300"
            style={{ 
              border: isHovered ? "2px solid var(--accent-primary)" : "2px solid transparent",
              boxShadow: isHovered ? "0 0 0 2px var(--bg-primary)" : "none",
            }}
          >
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className={`object-cover transition-transform duration-300 ${
                isHovered ? "scale-110" : "scale-100"
              }`}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-bold mb-0.5 truncate" style={{ color: "var(--text-primary)" }}>
              {testimonial.name}
            </h4>
            <div className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-sm truncate" style={{ color: "var(--ui-medium)" }}>
                {testimonial.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
