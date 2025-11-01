"use client"

import Image from "next/image"

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
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
          style={{ color: "var(--text-primary)" }}
        >
          Lo que dicen nuestros viajeros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8"
              style={{
                borderRadius: "var(--card-radius)",
                boxShadow: "0 6px 18px rgba(20,15,21,0.05)",
                backgroundColor: "var(--bg-primary)",
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--ui-medium)" }}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <p className="italic leading-relaxed" style={{ color: "var(--text-secondary)", fontSize: "16px" }}>
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
