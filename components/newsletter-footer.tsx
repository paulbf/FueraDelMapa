"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function NewsletterFooter() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [experienceType, setExperienceType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submission:", { name, email, experienceType })
    // Handle form submission
  }

  return (
    <footer
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundColor: "rgba(252, 222, 178, 0.12)",
        borderTop: "1px solid rgba(186, 192, 202, 0.3)",
      }}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5" style={{ backgroundColor: "var(--accent-primary)", borderRadius: "50%", transform: "translate(-30%, -30%)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5" style={{ backgroundColor: "var(--accent-primary)", borderRadius: "50%", transform: "translate(30%, 30%)" }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance" style={{ color: "var(--text-primary)" }}>
            ¿Listo para salir del mapa?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Contanos sobre vos y diseñamos juntos tu próximo viaje auténtico
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Formulario */}
          <div className="relative">
            <div
              className="p-8 rounded-2xl"
              style={{
                backgroundColor: "var(--bg-primary)",
                boxShadow: "var(--shadow-soft)",
                border: "1px solid rgba(186, 192, 202, 0.2)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Nombre
                  </label>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 text-base transition-all duration-200 focus:border-accent-primary"
                    style={{
                      borderRadius: "10px",
                      borderColor: "rgba(186, 192, 202, 0.5)",
                      color: "var(--text-primary)",
                      backgroundColor: "var(--bg-primary)",
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 text-base transition-all duration-200 focus:border-accent-primary"
                    style={{
                      borderRadius: "10px",
                      borderColor: "rgba(186, 192, 202, 0.5)",
                      color: "var(--text-primary)",
                      backgroundColor: "var(--bg-primary)",
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    ¿Qué tipo de experiencia buscás?
                  </label>
                  <Select value={experienceType} onValueChange={setExperienceType} required>
                    <SelectTrigger
                      className="h-12 text-base w-full"
                      style={{
                        borderRadius: "10px",
                        borderColor: "rgba(186, 192, 202, 0.5)",
                        color: experienceType ? "var(--text-primary)" : "var(--ui-medium)",
                        backgroundColor: "var(--bg-primary)",
                      }}
                    >
                      <SelectValue placeholder="Seleccioná una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aventura">Aventura y naturaleza</SelectItem>
                      <SelectItem value="cultura">Cultura e historia</SelectItem>
                      <SelectItem value="gastronomia">Gastronomía local</SelectItem>
                      <SelectItem value="relax">Relax y bienestar</SelectItem>
                      <SelectItem value="urbano">Experiencias urbanas</SelectItem>
                      <SelectItem value="rural">Destinos rurales</SelectItem>
                      <SelectItem value="playa">Playas y costa</SelectItem>
                      <SelectItem value="montaña">Montaña y senderismo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "var(--bg-primary)",
                    borderRadius: "10px",
                    boxShadow: "0 6px 20px rgba(188, 63, 35, 0.3)",
                  }}
                >
                  <span>Diseñá tu viaje diferente</span>
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                Contactanos
              </h3>
              <div className="space-y-4">
                <div
                  className="flex items-start gap-4 p-5 rounded-xl transition-all duration-200 hover:shadow-md cursor-default"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid rgba(186, 192, 202, 0.2)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ backgroundColor: "rgba(252, 222, 178, 0.4)" }}
                  >
                    📍
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold mb-1 uppercase tracking-wide" style={{ color: "var(--ui-medium)" }}>
                      Ubicación
                    </p>
                    <p className="text-base font-medium" style={{ color: "var(--text-primary)" }}>
                      Córdoba, Argentina
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+5493515550000"
                  className="flex items-start gap-4 p-5 rounded-xl transition-all duration-200 hover:shadow-md cursor-pointer block"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid rgba(186, 192, 202, 0.2)",
                    boxShadow: "var(--shadow-soft)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ backgroundColor: "rgba(252, 222, 178, 0.4)" }}
                  >
                    📞
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold mb-1 uppercase tracking-wide" style={{ color: "var(--ui-medium)" }}>
                      Teléfono
                    </p>
                    <p className="text-base font-medium transition-colors" style={{ color: "var(--accent-primary)" }}>
                      +54 9 351 555 0000
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:hola@fueradelmapa.com"
                  className="flex items-start gap-4 p-5 rounded-xl transition-all duration-200 hover:shadow-md cursor-pointer block"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid rgba(186, 192, 202, 0.2)",
                    boxShadow: "var(--shadow-soft)",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ backgroundColor: "rgba(252, 222, 178, 0.4)" }}
                  >
                    ✉️
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold mb-1 uppercase tracking-wide" style={{ color: "var(--ui-medium)" }}>
                      Email
                    </p>
                    <p className="text-base font-medium transition-colors" style={{ color: "var(--accent-primary)" }}>
                      hola@fueradelmapa.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer copyright */}
        <div className="mt-20 pt-8 border-t text-center" style={{ borderColor: "rgba(186, 192, 202, 0.3)" }}>
          <p style={{ color: "var(--ui-medium)" }}>© 2025 Fuera del Mapa. Viajá auténtico, viajá consciente.</p>
        </div>
      </div>
    </footer>
  )
}
