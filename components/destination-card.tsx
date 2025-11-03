"use client"

import Image from "next/image"
import { useState } from "react"

interface DestinationCardProps {
  title: string
  alternative: string
  badge: string
  description: string
  imageSrc: string
}

export function DestinationCard({ title, alternative, badge, description, imageSrc }: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-full max-w-[380px] min-h-[480px] transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
      style={{
        borderRadius: "var(--card-radius)",
        boxShadow: "var(--shadow-soft)",
        border: "1px solid rgba(186, 192, 202, 0.3)",
        backgroundColor: "var(--bg-primary)",
      }}
      onMouseEnter={(e) => {
        setIsHovered(true)
        e.currentTarget.style.boxShadow = "var(--shadow-elevated)"
        e.currentTarget.style.borderColor = "rgba(186, 192, 202, 0.6)"
      }}
      onMouseLeave={(e) => {
        setIsHovered(false)
        e.currentTarget.style.boxShadow = "var(--shadow-soft)"
        e.currentTarget.style.borderColor = "rgba(186, 192, 202, 0.3)"
      }}
    >
      <div
        className="relative w-full h-[280px] overflow-hidden"
        style={{ borderRadius: "var(--card-radius) var(--card-radius) 0 0" }}
      >
        {/* Overlay gradiente sutil */}
        <div
          className="absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
            opacity: isHovered ? 0.3 : 0,
          }}
        />
        {/* Badge sobre la imagen */}
        <div
          className="absolute top-4 left-4 z-20 transition-all duration-300"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(252, 222, 178, 0.95)",
              color: "var(--text-primary)",
              boxShadow: "0 4px 12px rgba(20, 15, 21, 0.15)",
            }}
          >
            {badge}
          </div>
        </div>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ease-out ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>
      <div className="p-7 space-y-4">
        <div>
          <h3 
            className="text-2xl font-bold mb-2 transition-colors duration-200" 
            style={{ 
              color: "var(--text-primary)",
            }}
          >
            {title}
          </h3>
          <p 
            className="text-sm font-medium mb-4 transition-colors duration-200" 
            style={{ 
              color: "var(--accent-primary)",
            }}
          >
            {alternative}
          </p>
        </div>
        <p 
          className="leading-relaxed text-[15px] transition-colors duration-200" 
          style={{ 
            color: "var(--text-secondary)",
            lineHeight: "1.7",
          }}
        >
          {description}
        </p>
        {/* Indicador de hover */}
        <div 
          className="flex items-center gap-2 mt-6 pt-4 transition-opacity duration-300"
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
