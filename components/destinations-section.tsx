"use client"

import { DestinationCard } from "@/components/destination-card"

const destinations = [
  {
    title: "Mahahual",
    alternative: "Alternativa a Cancún",
    badge: "Caribe auténtico",
    description: "Calles de arena, snorkel en arrecifes vírgenes, cero resorts masivos",
    imageQuery: "Mahahual pristine beach with palm trees Caribbean Mexico",
  },
  {
    title: "Tarragona",
    alternative: "Alternativa a Barcelona",
    badge: "Historia viva",
    description: "Patrimonio romano intacto, ritmo local, gastronomía catalana auténtica",
    imageQuery: "Tarragona Roman ruins Mediterranean sea Catalonia Spain",
  },
  {
    title: "Estrasburgo",
    alternative: "Alternativa a París",
    badge: "Europa secreta",
    description: "Arquitectura entramada, mezcla cultural franco-alemana, sin colas",
    imageQuery: "Strasbourg Petit France canals half-timbered houses",
  },
]

export function DestinationsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-balance"
          style={{ color: "var(--text-primary)" }}
        >
          Destinos que te van a sorprender
        </h2>
        <p
          className="text-xl text-center mb-16 max-w-2xl mx-auto text-pretty"
          style={{ color: "var(--text-secondary)" }}
        >
          Lugares fascinantes que no están en todas las guías turísticas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  )
}
