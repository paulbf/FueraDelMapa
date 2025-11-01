"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterFooter() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", { name, email })
    // Handle newsletter signup
  }

  return (
    <footer
      className="py-16 px-6"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid rgba(186, 192, 202, 0.45)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: "var(--text-primary)" }}>
            Descubrí destinos únicos cada mes
          </h2>
          <p className="text-lg text-pretty" style={{ color: "var(--text-secondary)" }}>
            Recibí inspiración, guías y ofertas exclusivas en tu inbox
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12"
              style={{
                borderRadius: "10px",
                borderColor: "var(--ui-light)",
                color: "var(--text-primary)",
              }}
              required
            />
            <Input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
              style={{
                borderRadius: "10px",
                borderColor: "var(--ui-light)",
                color: "var(--text-primary)",
              }}
              required
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full h-12 text-base font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--accent-primary)",
              color: "var(--bg-primary)",
              borderRadius: "10px",
            }}
          >
            Quiero viajar diferente
          </Button>
        </form>
        <div className="mt-16 pt-8 border-t text-center" style={{ borderColor: "rgba(186, 192, 202, 0.3)" }}>
          <p style={{ color: "var(--ui-medium)" }}>© 2025 Fuera del Mapa. Viajá auténtico, viajá consciente.</p>
        </div>
      </div>
    </footer>
  )
}
