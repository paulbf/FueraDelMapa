"use client"

import Image from "next/image"

interface DestinationCardProps {
  title: string
  alternative: string
  badge: string
  description: string
  imageQuery: string
}

export function DestinationCard({ title, alternative, badge, description, imageQuery }: DestinationCardProps) {
  return (
    <div
      className="w-full max-w-[340px] min-h-[420px] transition-all duration-200 hover:-translate-y-1 cursor-pointer"
      style={{
        borderRadius: "var(--card-radius)",
        boxShadow: "var(--shadow-soft)",
        border: "1px solid rgba(186, 192, 202, 0.45)",
        backgroundColor: "var(--bg-primary)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-elevated)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-soft)"
      }}
    >
      <div
        className="relative w-full h-[240px] overflow-hidden"
        style={{ borderRadius: "var(--card-radius) var(--card-radius) 0 0" }}
      >
        <Image
          src={`/.jpg?height=240&width=340&query=${imageQuery}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div
          className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3"
          style={{
            backgroundColor: "var(--accent-warm)",
            color: "var(--text-primary)",
          }}
        >
          {badge}
        </div>
        <h3 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
          {title}
        </h3>
        <p className="text-sm mb-3" style={{ color: "var(--ui-medium)" }}>
          {alternative}
        </p>
        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {description}
        </p>
      </div>
    </div>
  )
}
