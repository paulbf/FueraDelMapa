"use client"

import { useState } from "react"

const comparisons = [
  {
    saturated: {
      icon: "🗽",
      name: "Cancún",
      description: "Hoteles gigantes, playas abarrotadas",
    },
    alternative: {
      icon: "🌴",
      name: "Mahahual",
      description: "Pueblo pesquero, arrecifes vírgenes, relax auténtico",
    },
  },
  {
    saturated: {
      icon: "🏙️",
      name: "Barcelona",
      description: "Colas interminables, precios inflados",
    },
    alternative: {
      icon: "🏛️",
      name: "Tarragona",
      description: "Anfiteatro romano vacío, tapas con locales",
    },
  },
  {
    saturated: {
      icon: "🗼",
      name: "París",
      description: "Multitudes en cada monumento",
    },
    alternative: {
      icon: "🏘️",
      name: "Estrasburgo",
      description: "Paseos en barca tranquilos, barrios con alma",
    },
  },
]

export function ComparatorSection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "rgba(186, 192, 202, 0.08)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance"
            style={{ color: "var(--text-primary)" }}
          >
            Menos turismo, más descubrimiento
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Compará destinos populares con nuestras alternativas auténticas
          </p>
        </div>

        {/* Headers de columnas para desktop */}
        <div className="hidden md:grid grid-cols-2 gap-4 mb-4 px-2">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--ui-medium)" }}>
              No te llevamos
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--accent-primary)" }}>
              Te sugerimos y llevamos
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {comparisons.map((comparison, index) => (
            <ComparisonCard key={index} comparison={comparison} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonCard({ comparison, index }: { comparison: typeof comparisons[0], index: number }) {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null)

  return (
    <div
      className="relative group"
      style={{
        borderRadius: "var(--card-radius)",
        backgroundColor: "var(--bg-primary)",
        boxShadow: "var(--shadow-soft)",
        border: "1px solid rgba(186, 192, 202, 0.2)",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
      onMouseLeave={() => setHoveredSide(null)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Lado izquierdo - No te llevamos */}
        <div
          className="relative p-6 transition-all duration-300"
          style={{
            backgroundColor: hoveredSide === "left" ? "rgba(186, 192, 202, 0.15)" : "rgba(186, 192, 202, 0.08)",
            borderRight: "1px solid rgba(186, 192, 202, 0.2)",
          }}
          onMouseEnter={() => setHoveredSide("left")}
        >
          {/* Label móvil */}
          <div className="md:hidden mb-3">
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ui-medium)" }}>
              No te llevamos
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div 
              className={`text-4xl flex-shrink-0 transition-transform duration-300 ${
                hoveredSide === "left" ? "scale-110" : "scale-100"
              }`}
            >
              {comparison.saturated.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                {comparison.saturated.name}
              </h3>
              <p 
                className="leading-relaxed text-[15px]"
                style={{ color: "var(--text-secondary)" }}
              >
                {comparison.saturated.description}
              </p>
            </div>
          </div>
          {/* Indicador visual negativo */}
          <div className="absolute top-4 right-4 opacity-30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
        </div>

        {/* Flecha central */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm transition-transform duration-300 ${
              hoveredSide ? "scale-110" : "scale-100"
            }`}
            style={{
              backgroundColor: "rgba(252, 222, 178, 0.9)",
              boxShadow: "0 4px 12px rgba(20, 15, 21, 0.15)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              style={{ color: "var(--accent-primary)" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Lado derecho - Te sugerimos y llevamos */}
        <div
          className="relative p-6 transition-all duration-300"
          style={{
            backgroundColor: hoveredSide === "right" ? "rgba(188, 63, 35, 0.08)" : "rgba(252, 222, 178, 0.12)",
          }}
          onMouseEnter={() => setHoveredSide("right")}
        >
          {/* Label móvil */}
          <div className="md:hidden mb-3">
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--accent-primary)" }}>
              Te sugerimos y llevamos
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div 
              className={`text-4xl flex-shrink-0 transition-transform duration-300 ${
                hoveredSide === "right" ? "scale-110" : "scale-100"
              }`}
            >
              {comparison.alternative.icon}
            </div>
            <div className="flex-1">
              <h3 
                className="text-lg md:text-xl font-bold mb-2"
                style={{ color: "var(--accent-primary)" }}
              >
                {comparison.alternative.name}
              </h3>
              <p 
                className="leading-relaxed text-[15px]"
                style={{ color: "var(--text-secondary)" }}
              >
                {comparison.alternative.description}
              </p>
            </div>
          </div>
          {/* Indicador visual positivo */}
          <div className="absolute top-4 right-4 opacity-40">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: "var(--accent-primary)" }}>
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
