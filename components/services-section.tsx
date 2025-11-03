"use client"

import { useState } from "react"

const services = [
  {
    icon: "📍",
    title: "Itinerarios Personalizados",
    description: "Diseñamos tu viaje según tus intereses reales, no tours genéricos",
  },
  {
    icon: "🏠",
    title: "Alojamiento con Alma",
    description: "Posadas familiares, hoteles boutique, casas rurales con carácter",
  },
  {
    icon: "🍷",
    title: "Experiencias Locales",
    description: "Cenas en casas de locales, talleres artesanales, rutas secretas",
  },
  {
    icon: "✈️",
    title: "Logística Sin Estrés",
    description: "Traslados, seguros, soporte 24/7 - todo resuelto",
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-0 w-72 h-72 opacity-5" style={{ backgroundColor: "var(--accent-primary)", borderRadius: "50%", transform: "translate(-50%, -50%)" }} />
      <div className="absolute bottom-20 right-0 w-96 h-96 opacity-5" style={{ backgroundColor: "var(--accent-primary)", borderRadius: "50%", transform: "translate(50%, 50%)" }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance"
            style={{ color: "var(--text-primary)" }}
          >
            Cómo hacemos que tu viaje sea único
          </h2>
          <p
            className="text-lg md:text-xl text-center max-w-2xl mx-auto text-pretty"
            style={{ color: "var(--text-secondary)" }}
          >
            Nos encargamos de cada detalle para que vos solo disfrutes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden transition-all duration-300 cursor-pointer"
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
      {/* Fondo decorativo con gradiente */}
      <div
        className="absolute top-0 right-0 w-32 h-32 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)`,
          opacity: isHovered ? 0.15 : 0.05,
          transform: "translate(30%, -30%)",
        }}
      />

      {/* Número decorativo */}
      <div
        className="absolute top-4 left-4 text-6xl font-bold transition-all duration-300"
        style={{
          color: "rgba(186, 192, 202, 0.1)",
          opacity: isHovered ? 0.15 : 0.1,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        {index + 1}
      </div>

      <div className="relative p-6 min-h-[220px] flex flex-col">
        {/* Icono con fondo */}
        <div className="mb-5">
          <div
            className="relative inline-block"
          >
            <div
              className="absolute inset-0 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: "rgba(252, 222, 178, 0.3)",
                transform: isHovered ? "scale(1.2) rotate(5deg)" : "scale(1) rotate(0deg)",
                opacity: isHovered ? 0.5 : 0.3,
              }}
            />
            <div
              className={`relative text-4xl transition-transform duration-300 ${
                isHovered ? "scale-110 rotate-3" : "scale-100 rotate-0"
              }`}
              style={{ padding: "8px" }}
            >
              {service.icon}
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex-1">
          <h3 
            className="text-lg md:text-xl font-bold mb-3 transition-colors duration-200" 
            style={{ color: "var(--text-primary)" }}
          >
            {service.title}
          </h3>
          <p 
            className="leading-relaxed text-[15px] transition-colors duration-200" 
            style={{ color: "var(--text-secondary)" }}
          >
            {service.description}
          </p>
        </div>

        {/* Indicador de hover */}
        <div 
          className="mt-4 pt-4 flex items-center gap-2 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            borderTop: "1px solid rgba(186, 192, 202, 0.2)",
          }}
        >
          <span 
            className="text-sm font-medium"
            style={{ color: "var(--accent-primary)" }}
          >
            Descubrir más
          </span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none"
            className="transition-transform duration-300"
            style={{ 
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
              color: "var(--accent-primary)",
            }}
          >
            <path 
              d="M6 12L10 8L6 4" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
