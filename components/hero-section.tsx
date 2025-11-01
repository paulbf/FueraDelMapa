"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center text-center px-6"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(20,15,21,0.38), rgba(20,15,21,0.15)), url('/estrasburgo-canals-and-architecture-beautiful-euro.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          style={{ color: "var(--bg-primary)" }}
        >
          No te llevamos a Nueva York, Cancún ni París.
        </h1>
        <p
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-pretty leading-relaxed"
          style={{ color: "var(--bg-primary)" }}
        >
          Te llevamos a Estrasburgo, Mahahual y Tarragona. Igual de fascinantes, sin el ruido ni las multitudes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="px-6 py-7 text-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--accent-primary)",
              color: "var(--bg-primary)",
              borderRadius: "10px",
            }}
          >
            Descubrí tu destino oculto
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-6 py-7 text-lg font-medium transition-all duration-200 hover:-translate-y-0.5 bg-transparent"
            style={{
              borderColor: "var(--ui-light)",
              color: "var(--bg-primary)",
              backgroundColor: "rgba(251, 250, 251, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
            }}
          >
            Cómo viajamos distinto
          </Button>
        </div>
      </div>
    </section>
  )
}
