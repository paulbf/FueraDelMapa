"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[rgba(20,15,21,0.5)] via-[rgba(20,15,21,0.3)] to-[rgba(20,15,21,0.2)]" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[rgba(20,15,21,0.7)] via-transparent to-transparent" />
        <Image
          src="/Estrasburgo.png"
          alt="Estrasburgo"
          fill
          priority
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-40 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight"
          style={{ 
            color: "var(--bg-primary)",
            textShadow: "0 2px 16px rgba(0, 0, 0, 0.4)",
          }}
        >
          No te llevamos a Nueva York, Cancún ni París.
        </h1>

        <p
          className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto text-pretty leading-relaxed"
          style={{ 
            color: "rgba(251, 250, 251, 0.95)",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          Te llevamos a <span className="font-semibold">Estrasburgo</span>, <span className="font-semibold">Mahahual</span> y <span className="font-semibold">Tarragona</span>.
          <br />
          Igual de fascinantes, sin el ruido ni las multitudes.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="px-8 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            style={{
              backgroundColor: "var(--accent-primary)",
              color: "var(--bg-primary)",
              borderRadius: "10px",
              boxShadow: "0 6px 20px rgba(188, 63, 35, 0.35)",
            }}
          >
            <span>Descubrí tu destino oculto</span>
            <svg 
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
            style={{
              borderWidth: "2px",
              borderColor: "rgba(251, 250, 251, 0.5)",
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

      {/* Indicador de scroll */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
        <svg
          className="w-5 h-5 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
